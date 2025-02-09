# Introduction:

The folder of _logseq:_ `Logseq-notas\pages` folder is a mess!

If you want to organize it, You are a lucky person! This mini-application will copy the pages from `Logseq-notas\pages` directory to another directory of your own choice. 

The main advantages of doing this are:

- Bitter organization of your notes;
- If you want to backup your notes, it's easier, because this copy your notes without removing the notes from the `Logseq-notas\pages` directory, and all in their respective folders!
- If you want to transfer notes from _logseq_ to another application, as _Obsidian_, it is easier;

# Ok, how can I do this?

The notes of _loqseg_ must be preceded by `[ a field of your choice ]`. An example is notes from  `JavaScript`. You must name the note name like this: 
`[ JavaScript ]: Async in JavaScript`, or `[ JavaScript ] Data Object`. 

I choose `JavaScript` just to explain it clearly, but it can be any name. However, if the prefix is different, this will create a different folder.

A common error is: `[ JavaScript ] Data Object` and `[ Javascript ]: Async in JavaScript`. The second "s" of `[ JavaScript ] ` is uppercase in the first and lowercase 
in the second. This creates different folders! 

After adding the prefix correctly, clone the project and run it:

```sh
node dist/index.js D:/Logseq-notas/pages D:/loqseq-backup/
```
> Make sure to be in the correct directory.

The parameter: `D:/loqseq-backup/` is the directory of **backup**. In my machine is `D:/loqseq-backup/`, but you can choose any directory for this. 

The parameter: `D:/Logseq-notas/pages` is the root directory of notes in my machine. Make sure to pass
the root directory of your machine.
