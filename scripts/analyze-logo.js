const fs = require('fs');
const { PNG } = require('pngjs');

const data = fs.readFileSync('logo.png');
const png = PNG.sync.read(data);

console.log('PNG size:', png.width, 'x', png.height);

// Check corner pixels (background color)
const idx0 = 0;
console.log('Top-left pixel RGB:', png.data[idx0], png.data[idx0+1], png.data[idx0+2], 'Alpha:', png.data[idx0+3]);

// Sample pixels across width
let minR = 255, minG = 255, minB = 255;
let maxR = 0, maxG = 0, maxB = 0;
let darkPixels = 0;
let cyanPixels = 0;
let whitePixels = 0;

for (let y = 0; y < png.height; y++) {
  for (let x = 0; x < png.width; x++) {
    const idx = (png.width * y + x) << 2;
    const r = png.data[idx];
    const g = png.data[idx + 1];
    const b = png.data[idx + 2];

    if (r > 245 && g > 245 && b > 245) {
      whitePixels++;
    } else if (r < 40 && g < 40 && b < 60) {
      darkPixels++;
    } else if (g > 150 && b > 150) {
      cyanPixels++;
    }
  }
}

console.log('Stats:');
console.log('White pixels:', whitePixels, 'Dark pixels:', darkPixels, 'Cyan pixels:', cyanPixels);
