/**
 * Makes black/dark background of the logo PNG transparent.
 * Usage: node scripts/make-logo-transparent.mjs [input.png] [output.png]
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const inputPath = process.argv[2] || join(projectRoot, 'public', 'logo.png');
const outputPath = process.argv[3] || join(projectRoot, 'public', 'logo.png');

// Logo with black bg from Cursor assets (try both possible filenames)
const assetsDir = join(
  projectRoot,
  '..', '..', '.cursor', 'projects', 'c-Users-Mr-Laptop-Workspace-Eleve-Interiors',
  'assets'
);
const possibleLogos = [
  join(assetsDir, 'c__Users_Mr_Laptop_AppData_Roaming_Cursor_User_workspaceStorage_00f020204def3e7e7b67a0abd13a188d_images_image-3b68f138-b40c-4ee6-8903-3ee94fba5e6e.png'),
  join(assetsDir, 'c__Users_Mr_Laptop_AppData_Roaming_Cursor_User_workspaceStorage_00f020204def3e7e7b67a0abd13a188d_images_image-76195f97-69c0-49a5-94b7-9a4d771de618.png'),
];
const cursorLogo = possibleLogos.find(p => existsSync(p));

const src = cursorLogo || inputPath;
if (!existsSync(src)) {
  console.error('Input image not found. Tried:', src, 'and', inputPath);
  process.exit(1);
}

async function main() {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const threshold = 65; // remove black + dark grey box (pixels darker than this → transparent)

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log('Logo saved with transparent background:', outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
