const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

// Recursively find all files
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

  // Only compress files larger than 400 KB
  if (sizeKB < 400) {
    return;
  }

  console.log(`Processing: ${path.relative(IMAGES_DIR, filePath)} (${(sizeKB / 1024).toFixed(2)} MB)`);

  try {
    const image = await Jimp.read(filePath);
    
    // Resize if too large
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

    // Apply compression
    if (ext === ".png") {
      image.deflateLevel(9); 
      image.filterType(Jimp.PNG_FILTER_NONE);
    } else {
      image.quality(80); // For JPEG
    }

    await image.writeAsync(filePath);
    
    const newStats = fs.statSync(filePath);
    const newSizeKB = newStats.size / 1024;
    console.log(`  ✓ Compressed: ${(sizeKB / 1024).toFixed(2)} MB -> ${(newSizeKB / 1024).toFixed(2)} MB`);
  } catch (error) {
    console.error(`  ✗ Error processing ${path.relative(IMAGES_DIR, filePath)}:`, error.message);
  }
}

async function main() {
  console.log("Image compression script started...");
  console.log(`Target directory: ${IMAGES_DIR}`);
  
  const files = [];
  walkDir(IMAGES_DIR, (filePath) => {
    files.push(filePath);
  });
  
  console.log(`Found ${files.length} total files. Checking for large images...`);
  
  for (const file of files) {
    await compressImage(file);
  }
  
  console.log("Compression complete!");
}

main().catch(err => {
  console.error("Fatal error:", err);
});
