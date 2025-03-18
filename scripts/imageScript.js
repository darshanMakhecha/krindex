const fs = require('fs');
const path = require('path');

const generate = () => {
  let properties = [];
  const initialPath = 'src/images'; // Folder to scan
  const replacePath = path.dirname(initialPath); // Get the parent directory of the images folder

  function readRecursive(dirPath) {
    const key = path.basename(dirPath); // Get the last folder name as the key
    let val = [];

    // Read the directory contents
    fs.readdirSync(dirPath, { withFileTypes: true }).forEach((item) => {
      if (item.isDirectory()) {
        // If the item is a directory, call readRecursive for that subdirectory
        readRecursive(path.join(dirPath, item.name));
      } else {
        // If the item is a file, process it
        if (!item.name.startsWith('.DS_Store')) {
          let cleanName = item.name
            .replace('@2x.png', '')
            .replace('@3x.png', '')
            .replace('.jpg', '')
            .replace('.jpeg', '')
            .replace('.gif', '')
            .replace('.mp4', '')
            .replace('.mov', '')
            .replace('-', '_')
            .replace('.png', '');

          // Adjust the path to use '../images/imagename' instead of './images/imagename'
          let property = `'${cleanName}': require('${path.join('..', 'images', item.name).replace(/\\/g, '/')}')`;

          if (dirPath === initialPath) {
            // Directly push the property if it's in the root images folder
            properties.push(property);
          } else {
            // Otherwise, add to the subfolder properties
            val.push(property);
          }
        }
      }
    });

    // If there are any properties for a subfolder, add them to the main properties array
    if (val.length > 0) {
      const subfolderProperty = `'${key}': {\n    ${val.join(',\n    ')}\n  }`;
      properties.push(subfolderProperty);
    }
  }

  // Start the recursive scan from the initialPath
  readRecursive(initialPath);

  // Generate the string for the images.js file
  const string =
    properties.length === 0
      ? ''
      : `const images = {
  ${properties.join(',\n  ')},
};

export default images;
`;

  // Write the generated content to the 'src/utils/images.js' file
  const outputFilePath = path.join('src', 'utils', 'images.js');
  fs.writeFileSync(outputFilePath, string, 'utf8');

  console.log('images.js file generated successfully!');
};

generate();
