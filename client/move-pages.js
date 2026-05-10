import fs from 'fs';
import path from 'path';

const clientDir = process.cwd();
const pagesDir = path.join(clientDir, 'src', 'pages');
const appJsxPath = path.join(clientDir, 'src', 'App.jsx');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let appJsxContent = fs.readFileSync(appJsxPath, 'utf8');

files.forEach(file => {
  const baseName = file.replace('.jsx', '');
  
  // convert to lowercase kebab-case
  const folderName = baseName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const newFileName = folderName + '.jsx';
  
  const folderPath = path.join(pagesDir, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  
  fs.renameSync(
    path.join(pagesDir, file),
    path.join(folderPath, newFileName)
  );

  // Update App.jsx imports
  const oldImportPath = `./pages/${baseName}`;
  const newImportPath = `./pages/${folderName}/${folderName}`;
  
  const regex = new RegExp(`from ['"]${oldImportPath}['"]`, 'g');
  appJsxContent = appJsxContent.replace(regex, `from '${newImportPath}'`);
});

fs.writeFileSync(appJsxPath, appJsxContent);

console.log('Successfully moved files and updated App.jsx');
