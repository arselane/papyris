import sharp from 'sharp';
import { readdir, stat, unlink, rename } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, '../src/assets');
const supportedFormats = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath) {
  try {
    const ext = filePath.toLowerCase();
    if (!supportedFormats.some(format => ext.endsWith(format))) {
      return;
    }

    console.log(`Optimizing: ${filePath}`);
    
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const tempPath = filePath + '.temp';
    
    // Optimize and replace original
    if (ext.endsWith('.jpg') || ext.endsWith('.jpeg')) {
      await image
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toFile(tempPath);
    } else if (ext.endsWith('.png')) {
      await image
        .png({ quality: 85, compressionLevel: 9, adaptiveFiltering: true })
        .toFile(tempPath);
    }
    
    // Replace original with optimized
    await unlink(filePath);
    await rename(tempPath, filePath);
    
    // Generate WebP version
    await sharp(filePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    console.log(`✓ Optimized and replaced: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${filePath}:`, error.message);
  }
}

async function walkDirectory(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      await walkDirectory(filePath);
    } else if (stats.isFile()) {
      await optimizeImage(filePath);
    }
  }
}

console.log('🚀 Starting image optimization...\n');
await walkDirectory(assetsDir);
console.log('\n✅ Image optimization complete!');
