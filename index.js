import * as fs from 'node:fs';

const folderPath = './scripts';

console.log('Starting this party!');

fs.access(folderPath, fs.constants.F_OK, () => {
    console.log('Folder accesible!')
});

console.log('Ending this party!');