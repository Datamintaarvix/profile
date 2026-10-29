import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

// Sync uploaded Grokal visuals to public assets directory
try {
  const srcDir = 'C:/Users/Pavithra L/.gemini/antigravity/brain/701c067a-eef4-42ec-aef8-334bbbee0a4d/.user_uploaded';
  const outDir = path.resolve(__dirname, 'public/dataanalyst_project/grokal');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const syncMap = [
    { src: 'media_1793253194064_b8f05058.png', out: 'grokal_main_dashboard.png' },
    { src: 'media_1793252501637_29c9b091.png', out: 'grokal_outlet_type.png' },
    { src: 'media_1793252504101_c566d9fd.png', out: 'grokal_establishment_trend.png' },
    { src: 'media_1793252506751_9a77fe0b.png', out: 'grokal_kpi_cards.png' },
    { src: 'media_1793252509142_42eb7b3e.png', out: 'grokal_category_analysis.png' }
  ];
  for (const item of syncMap) {
    const srcFile = path.join(srcDir, item.src);
    const outFile = path.join(outDir, item.out);
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, outFile);
    }
  }
  // Also copy main dashboard to root of dataanalyst_project
  const mainSrc = path.join(srcDir, 'media_1793253194064_b8f05058.png');
  if (fs.existsSync(mainSrc)) {
    fs.copyFileSync(mainSrc, path.resolve(__dirname, 'public/dataanalyst_project/grokal_main_dashboard.png'));
  }
} catch (err) {
  console.error('Grokal visual sync notice:', err);
}

function localApiPlugin(): Plugin {
  return {
    name: 'local-api-handler',
    configureServer(server) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url.startsWith('/api/')) {
          if (url === '/api/health') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              status: 'ok',
              provider: 'Resend',
              environment: 'vite-dev',
              timestamp: new Date().toISOString()
            }));
            return;
          }

          if (
            url === '/api/forms/submit' ||
            url === '/api/contact' ||
            url === '/api/careers' ||
            url === '/api/submit'
          ) {
            try {
              // Parse body if not already parsed
              if (!req.body && (req.method === 'POST' || req.method === 'PUT')) {
                const buffers: Buffer[] = [];
                for await (const chunk of req) {
                  buffers.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
                }
                const raw = Buffer.concat(buffers).toString('utf-8');
                try {
                  req.body = JSON.parse(raw);
                } catch {
                  req.body = raw;
                }
              }

              // Load the serverless function handler
              // @ts-ignore
              const { default: handler } = await import('./api/forms/submit.js');

              // Adapter for Express / Vercel response API
              let responseCode = 200;
              const adaptedRes: any = {
                statusCode: 200,
                setHeader(name: string, val: any) {
                  res.setHeader(name, val);
                },
                status(code: number) {
                  responseCode = code;
                  res.statusCode = code;
                  return adaptedRes;
                },
                json(data: any) {
                  res.statusCode = responseCode;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                  return adaptedRes;
                },
                end(data?: any) {
                  res.statusCode = responseCode;
                  res.end(data);
                  return adaptedRes;
                }
              };

              await handler(req, adaptedRes);
              return;
            } catch (err: any) {
              console.error('[Vite Dev API Handler Error]', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: err?.message || 'Internal local server error'
              }));
              return;
            }
          }
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
