import { writeFile, readFile, mkdir,  readdir , stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const notesRoot = 'D:/Logseq-notas/pages';
const backupDirectory = process.argv.slice(2)[0];

async function OrganizeNotes() {
    
    const notes: string[] = await readdir(notesRoot);
    
    for(let c = 0; c < notes.length; c++) {
        const status = await stat(`${notesRoot}/${notes[c]}`);

        if(!status.isFile()) { // to read more in documentation!
            console.log('this is not a file!');
            continue;
        };

        const file = await readFile(`D:/Logseq-notas/pages/${notes[c]}`);
        const fileContent = file.toString('utf-8');

        const filePrefix = notes[c].match(/\[(.*?)\]/);

        if(filePrefix) {
            const folderName = (filePrefix[1] as string).trim();
            const fileName = (filePrefix.input as string).trim();
    
            if(existsSync(`D:/loqseq-backup/${folderName[1]}`)) {
                await WriteFile(`${backupDirectory}${folderName}/${fileName}`, fileContent);
            } else {
                await mkdir(`${backupDirectory}${folderName}`,{recursive: true});
                await WriteFile(`${backupDirectory}${folderName}/${fileName}`, fileContent);
            }
        } else {
            continue;
        }
    };
};

async function WriteFile(directory: string, content: string) {
    await writeFile(directory, content);
};

OrganizeNotes();