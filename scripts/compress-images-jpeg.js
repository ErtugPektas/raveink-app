const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) {
    return;
  }

  const stats = fs.statSync(filePath);
  const sizeKB = stats.size / 1024;

  // Process all files larger than 300 KB
  if (sizeKB < 300) {
    return;
  }

  console.log(`Processing: ${path.relative(IMAGES_DIR, filePath)} (${(sizeKB / 1024).toFixed(2)} MB)`);

  try {
    const image = await Jimp.read(filePath);
    
    // Resize if width or height is greater than 1200px
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const maxDim = 1200;
    
    if (width > maxDim || height > maxDim) {
      if (width > height) {
        image.resize(maxDim, Jimp.AUTO);
      } else {
        image.resize(Jimp.AUTO, maxDim);
      }
    }

    // Force all photographic images (even .png) to use JPEG encoding for huge compression gains
    // Browsers natively render JPEG data inside .png files perfectly based on file headers.
    let buffer;
    if (ext === ".png") {
      // Convert to JPEG representation, keep quality at 80%
      buffer = await image.quality(80).getBufferAsync(Jimp.MIME_JPEG);
    } else {
      buffer = await image.quality(80).getBufferAsync(Jimp.MIME_JPEG);
    }

    fs.writeFileSync(filePath, buffer);
    
    const newStats = fs.statSync(filePath);
    const newSizeKB = newStats.size / 1024;
    console.log(`  ✓ Compressed: ${(sizeKB / 1024).toFixed(2)} MB -> ${(newSizeKB / 1024).toFixed(2)} MB`);
  } catch (error) {
    console.error(`  ✗ Error processing ${path.relative(IMAGES_DIR, filePath)}:`, error.message);
  }
}

async function main() {
  console.log("Starting photographic image compression...");
  console.log(`Target: ${IMAGES_DIR}`);
  
  const files = [];
  walkDir(IMAGES_DIR, (filePath) => {
    files.push(filePath);
  });
  
  console.log(`Found ${files.length} files. Checking for optimization opportunities...`);
  
  for (const file of files) {
    await compressImage(file);
  }
  
  console.log("All images successfully optimized!");
}

main().catch(err => {
  console.error("Fatal error:", err);
});
