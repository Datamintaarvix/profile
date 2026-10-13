import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

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
