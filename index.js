import * as fs from 'node:fs';

const folderPath = './scripts';

fs.access(folderPath, fs.constants.F_OK, () => {
    console.log('Folder accesible!')
});