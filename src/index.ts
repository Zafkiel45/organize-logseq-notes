import { writeFile, readFile, mkdir,  readdir , stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const notesRoot = 'D:/Logseq-notas/pages';
const notesBackupDirectory = 'D:/loqseq-backup/'

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

        const folderName = notes[c].match(/\[(.*?)\]/);

        console.log(folderName)
        if(folderName) {
            if(existsSync(`D:/loqseq-backup/${folderName[1]}`)) {
                await WriteFile(`${notesBackupDirectory}${folderName[1].trim()}/${folderName[1].trim()}.md`, fileContent);
            } else {
                await mkdir(`D:/loqseq-backup/${folderName[1].trim()}`, {recursive: true});
                await WriteFile(`D:/loqseq-backup/${folderName[1].trim()}/${folderName[1].trim()}.md`, fileContent);
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