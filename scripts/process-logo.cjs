const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// Ensure output dirs exist
fs.mkdirSync('public', { recursive: true });
fs.mkdirSync(path.join('src', 'assets', 'logo'), { recursive: true });

// Copy original
fs.copyFileSync('logo.png', 'public/logo.png');
fs.copyFileSync('logo.png', 'src/assets/logo/logo-original.png');

const raw = fs.readFileSync('logo.png');
const srcPng = PNG.sync.read(raw);
const w = srcPng.width;
const h = srcPng.height;

// Find bounding box based on alpha > 10
let minX = w, maxX = 0, minY = h, maxY = 0;
let markMinX = w, markMaxX = 0, markMinY = h, markMaxY = 0;

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const idx = (w * y + x) << 2;
    const a = srcPng.data[idx + 3];

    if (a > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      // Mark is roughly in first 35% of the logo width
      if (x < w * 0.35) {
        if (x < markMinX) markMinX = x;
        if (x > markMaxX) markMaxX = x;
        if (y < markMinY) markMinY = y;
        if (y > markMaxY) markMaxY = y;
      }
    }
  }
}

console.log('Detected visible bounds:');
console.log('Full logo:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });
console.log('Mark only:', { markMinX, markMaxX, markMinY, markMaxY, width: markMaxX - markMinX, height: markMaxY - markMinY });

// Create cropped versions with comfortable 24px padding
const pad = 24;
const cX0 = Math.max(0, minX - pad);
const cY0 = Math.max(0, minY - pad);
const cW = Math.min(w - cX0, maxX - minX + pad * 2);
const cH = Math.min(h - cY0, maxY - minY + pad * 2);

// 1. Light logo (original colors, transparent background, nicely cropped)
const lightCrop = new PNG({ width: cW, height: cH });

// 2. Dark logo (dark navy text inverted to crisp white, mint/cyan gradients preserved)
const darkCrop = new PNG({ width: cW, height: cH });

for (let y = 0; y < cH; y++) {
  for (let x = 0; x < cW; x++) {
    const srcIdx = (w * (cY0 + y) + (cX0 + x)) << 2;
    const dstIdx = (cW * y + x) << 2;

    const r = srcPng.data[srcIdx];
    const g = srcPng.data[srcIdx + 1];
    const b = srcPng.data[srcIdx + 2];
    const a = srcPng.data[srcIdx + 3];

    // Light version
    lightCrop.data[dstIdx] = r;
    lightCrop.data[dstIdx + 1] = g;
    lightCrop.data[dstIdx + 2] = b;
    lightCrop.data[dstIdx + 3] = a;

    // Dark version
    if (a < 5) {
      darkCrop.data[dstIdx] = 0;
      darkCrop.data[dstIdx + 1] = 0;
      darkCrop.data[dstIdx + 2] = 0;
      darkCrop.data[dstIdx + 3] = 0;
    } else {
      // Check if this pixel is cyan / mint or dark navy
      // Mint has g > 150, cyan has b > 150 & g > 130
      // Dark navy has r < 50, g < 50, b < 90
      const isMintOrCyan = (g > 120 && (b > 120 || g > r + 30));
      
      if (isMintOrCyan) {
        // Keep the stunning mint-to-cyan gradient and dots exactly as branded
        darkCrop.data[dstIdx] = r;
        darkCrop.data[dstIdx + 1] = g;
        darkCrop.data[dstIdx + 2] = b;
        darkCrop.data[dstIdx + 3] = a;
      } else {
        // Turn the dark navy text / dark D element into bright clean white/off-white (#FFFFFF)
        darkCrop.data[dstIdx] = 255;
        darkCrop.data[dstIdx + 1] = 255;
        darkCrop.data[dstIdx + 2] = 255;
        darkCrop.data[dstIdx + 3] = a;
      }
    }
  }
}

fs.writeFileSync('public/logo-dark.png', PNG.sync.write(darkCrop));
fs.writeFileSync('public/logo-light.png', PNG.sync.write(lightCrop));
fs.writeFileSync('src/assets/logo/logo-dark.png', PNG.sync.write(darkCrop));
fs.writeFileSync('src/assets/logo/logo-light.png', PNG.sync.write(lightCrop));

// Mark only crop
const mPad = 20;
const mX0 = Math.max(0, markMinX - mPad);
const mY0 = Math.max(0, markMinY - mPad);
const mW = Math.min(w - mX0, markMaxX - markMinX + mPad * 2);
const mH = Math.min(h - mY0, markMaxY - markMinY + mPad * 2);

const markCrop = new PNG({ width: mW, height: mH });
for (let y = 0; y < mH; y++) {
  for (let x = 0; x < mW; x++) {
    const srcIdx = (w * (mY0 + y) + (mX0 + x)) << 2;
    const dstIdx = (mW * y + x) << 2;

    const r = srcPng.data[srcIdx];
    const g = srcPng.data[srcIdx + 1];
    const b = srcPng.data[srcIdx + 2];
    const a = srcPng.data[srcIdx + 3];

    if (a < 5) {
      markCrop.data[dstIdx] = 0;
      markCrop.data[dstIdx + 1] = 0;
      markCrop.data[dstIdx + 2] = 0;
      markCrop.data[dstIdx + 3] = 0;
    } else {
      const isMintOrCyan = (g > 120 && (b > 120 || g > r + 30));
      if (isMintOrCyan) {
        markCrop.data[dstIdx] = r;
        markCrop.data[dstIdx + 1] = g;
        markCrop.data[dstIdx + 2] = b;
        markCrop.data[dstIdx + 3] = a;
      } else {
        markCrop.data[dstIdx] = 255;
        markCrop.data[dstIdx + 1] = 255;
        markCrop.data[dstIdx + 2] = 255;
        markCrop.data[dstIdx + 3] = a;
      }
    }
  }
}

fs.writeFileSync('public/logo-mark.png', PNG.sync.write(markCrop));
fs.writeFileSync('src/assets/logo/logo-mark.png', PNG.sync.write(markCrop));

console.log('Logo processing completed successfully!');
