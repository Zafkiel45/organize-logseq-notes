"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("node:fs/promises");
const node_fs_1 = require("node:fs");
const notesRoot = 'D:/Logseq-notas/pages';
const backupDirectory = 'D:/loqseq-backup/';
async function OrganizeNotes() {
    const notes = await (0, promises_1.readdir)(notesRoot);
    for (let c = 0; c < notes.length; c++) {
        const status = await (0, promises_1.stat)(`${notesRoot}/${notes[c]}`);
        if (!status.isFile()) { // to read more in documentation!
            console.log('this is not a file!');
            continue;
        }
        ;
        const file = await (0, promises_1.readFile)(`D:/Logseq-notas/pages/${notes[c]}`);
        const fileContent = file.toString('utf-8');
        const filePrefix = notes[c].match(/\[(.*?)\]/);
        if (filePrefix) {
            const folderName = filePrefix[1].trim();
            const fileName = filePrefix.input.trim();
            if ((0, node_fs_1.existsSync)(`D:/loqseq-backup/${folderName[1]}`)) {
                await WriteFile(`${backupDirectory}${folderName}/${fileName}`, fileContent);
            }
            else {
                await (0, promises_1.mkdir)(`${backupDirectory}${folderName}`, { recursive: true });
                await WriteFile(`${backupDirectory}${folderName}/${fileName}`, fileContent);
            }
        }
        else {
            continue;
        }
    }
    ;
}
;
async function WriteFile(directory, content) {
    await (0, promises_1.writeFile)(directory, content);
}
;
OrganizeNotes();
//# sourceMappingURL=index.js.map