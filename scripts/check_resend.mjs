import fs from 'fs';
import path from 'path';

function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf-8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  }
  return env;
}

const rootEnv = parseEnv(path.resolve('.env'));
const serverEnv = parseEnv(path.resolve('server/.env'));

console.log('Root .env keys:', Object.keys(rootEnv));
console.log('Server .env keys:', Object.keys(serverEnv));
console.log('Root FROM_EMAIL:', rootEnv.FROM_EMAIL);
console.log('Root HR_FROM_EMAIL:', rootEnv.HR_FROM_EMAIL);
console.log('Server FROM_EMAIL:', serverEnv.FROM_EMAIL);
console.log('Server HR_FROM_EMAIL:', serverEnv.HR_FROM_EMAIL);

const checkKey = async (label, key) => {
  if (!key) {
    console.log(`[${label}] RESEND_API_KEY is not set.`);
    return;
  }
  const startsWithRe = key.startsWith('re_');
  const len = key.length;
  const isPlaceholder = key.includes('PASTE') || key.includes('your_');
  console.log(`[${label}] RESEND_API_KEY present: startsWith 're_': ${startsWithRe}, length: ${len}, isPlaceholder: ${isPlaceholder}`);

  if (startsWithRe && !isPlaceholder) {
    try {
      const res = await fetch('https://api.resend.com/domains', {
        headers: { 'Authorization': `Bearer ${key}` },
      });
      const data = await res.json();
      console.log(`[${label}] Resend API /domains HTTP status: ${res.status}`);
      console.log(`[${label}] Resend API /domains response:`, JSON.stringify(data, null, 2));
    } catch (err) {
      console.log(`[${label}] /domains fetch error:`, err.message);
    }

    try {
      const res = await fetch('https://api.resend.com/api-keys', {
        headers: { 'Authorization': `Bearer ${key}` },
      });
      const data = await res.json();
      console.log(`[${label}] Resend API /api-keys HTTP status: ${res.status}`);
      if (res.ok && data?.data) {
        console.log(`[${label}] API Keys count: ${data.data.length}`);
        console.log(`[${label}] API Keys metadata:`, JSON.stringify(data.data.map(k => ({ id: k.id, name: k.name, created_at: k.created_at })), null, 2));
      } else {
        console.log(`[${label}] /api-keys response:`, JSON.stringify(data, null, 2));
      }
    } catch (err) {
      console.log(`[${label}] /api-keys fetch error:`, err.message);
    }
  }
};

await checkKey('Root .env', rootEnv.RESEND_API_KEY);
if (serverEnv.RESEND_API_KEY && serverEnv.RESEND_API_KEY !== rootEnv.RESEND_API_KEY) {
  await checkKey('Server .env', serverEnv.RESEND_API_KEY);
} else {
  console.log('Server .env has identical or missing key compared to Root .env');
}
