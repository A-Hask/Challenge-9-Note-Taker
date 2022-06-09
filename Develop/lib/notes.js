const fs = require('fs');
const path = require('path');

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2));
    return note;
}

function deleteNote(noteId, notesArray) {
    const noteToDelete = noteId;
    for (let i = 0; i < notesArray.length; i++) {
        if (noteToDelete === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, "../db/db.json"),
            JSON.stringify({ notes: notesArray }, null, 2));
            //if err throw err
        }
    }
}

module.exports = { 
    createNote,
    deleteNote
}