const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, 'assets', 'logo.jpg');
const output = path.join(__dirname, 'assets', 'logo.png');

(async () => {
    // Read the image, get raw pixel data
    const image = sharp(input);
    const { width, height, channels } = await image.metadata();
    
    const raw = await image.ensureAlpha().raw().toBuffer();
    
    // Process pixels: make white/near-white pixels transparent
    const threshold = 230; // Anything with R, G, B all above this = white
    
    for (let i = 0; i < raw.length; i += 4) {
        const r = raw[i];
        const g = raw[i + 1];
        const b = raw[i + 2];
        
        if (r > threshold && g > threshold && b > threshold) {
            // Pure white — make fully transparent
            raw[i + 3] = 0;
        } else if (r > 200 && g > 200 && b > 200) {
            // Near-white — fade out gradually for anti-aliased edges
            const avg = (r + g + b) / 3;
            const alpha = Math.round(255 * (1 - (avg - 200) / 55));
            raw[i + 3] = Math.min(raw[i + 3], alpha);
        }
    }
    
    await sharp(raw, { raw: { width, height, channels: 4 } })
        .png()
        .toFile(output);
    
    console.log(`Done! Saved transparent logo to ${output}`);
})();
