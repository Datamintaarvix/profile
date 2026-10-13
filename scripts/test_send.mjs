import { Resend } from 'resend';
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
const resend = new Resend(rootEnv.RESEND_API_KEY);

console.log('Testing send using Resend SDK...');
console.log('From:', 'DATAMINT AARVIX <info@datamintaarvix.com>');
console.log('To:', 'info@datamintaarvix.com');

try {
  const result = await resend.emails.send({
    from: 'DATAMINT AARVIX <info@datamintaarvix.com>',
    to: 'info@datamintaarvix.com',
    subject: 'DATAMINT AARVIX - Test Verification Email',
    text: 'This is a test email to verify that domain sending is functional.',
  });
  console.log('Resend send result:', JSON.stringify(result, null, 2));
} catch (err) {
  console.error('Resend send threw error:', err);
}
