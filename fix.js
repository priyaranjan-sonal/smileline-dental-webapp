const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add text-center md:text-left where appropriate
  // We can add text-center to block-level elements that usually hold text
  // Let's replace flex layouts first
  
  // 1. Navbar specific fixes
  if (filePath.endsWith('Navbar.tsx')) {
    content = content.replace(
      /className={`block text-base font-medium transition-all px-4 py-2 rounded-lg/g,
      "className={`block text-center text-base font-medium transition-all px-4 py-2 rounded-lg"
    );
  }

  // 2. Add text-center to motion.divs that are text blocks
  content = content.replace(
    /(<motion\.div[^>]*?>\s*(?:<h[1-6]|<div[^>]*inline-flex|<img))/gs,
    (match) => {
      if (match.includes('className=')) {
        if (!match.includes('text-center')) {
          return match.replace(/className="([^"]*)"/, `className="$1 text-center md:text-left md:items-start flex flex-col items-center"`);
        }
        return match;
      } else {
        return match.replace('>', ' className="text-center md:text-left flex flex-col items-center md:items-start">');
      }
    }
  );
  
  // 3. Footer fixes
  if (filePath.endsWith('Footer.tsx')) {
     content = content.replace(/className="space-y-6"/g, 'className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start"');
     content = content.replace(/<div>/g, '<div className="text-center md:text-left flex flex-col items-center md:items-start">');
     content = content.replace(/<ul className="space-y-4 text-sm">/g, '<ul className="space-y-4 text-sm text-center md:text-left w-full flex flex-col items-center md:items-start">');
     content = content.replace(/<li className="flex gap-3">/g, '<li className="flex gap-3 justify-center md:justify-start">');
  }

  // 4. Common alignments
  content = content.replace(/className="([^"]*)"/g, (match, classes) => {
    // If it's explicitly flex but doesn't have justify-center or justify-start on mobile, let's inject justify-center md:justify-start for icons/buttons
    // Actually simpler to just add text-center md:text-left
    let newClasses = classes;
    
    // We can also let the user regex target specific known wrappers.
    return `className="${newClasses}"`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Modified: ${filePath}`);
  }
}

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      if (file.endsWith('.tsx')) {
        processFile(path.join(dir, file));
      }
    });
  }
});
