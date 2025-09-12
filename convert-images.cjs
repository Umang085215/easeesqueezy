// convert-images.cjs
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imagesDir = path.join(process.cwd(), "public"); // scan all images in public
const srcDir = path.join(process.cwd(), "src"); // React source folder
const deleteOriginals = true; // set false if you want to keep png/jpg

// Step 1: Convert images in-place
function convertImages(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      convertImages(filePath); // recurse into subfolders
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
        const outputPath = filePath.replace(ext, ".webp");

        sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => {
            console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`);
            if (deleteOriginals) {
              fs.unlinkSync(filePath);
              console.log(`🗑️ Deleted original: ${file}`);
            }
          })
          .catch((err) => console.error(`❌ Error with ${file}:`, err));
      }
    }
  });
}

// Step 2: Update image references in React code
function replaceInFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      replaceInFiles(filePath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      let content = fs.readFileSync(filePath, "utf8");
      let updated = content.replace(/\.(png|jpg|jpeg)/gi, ".webp");

      if (content !== updated) {
        fs.writeFileSync(filePath, updated, "utf8");
        console.log(`📝 Updated image paths in ${filePath}`);
      }
    }
  });
}

// Run
convertImages(imagesDir);
replaceInFiles(srcDir);
