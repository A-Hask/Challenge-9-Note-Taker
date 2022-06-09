const router = require('express').Router();
const {createNote, deleteNote} = require('../lib/notes');
const {notes} = require('../db/db.json');
const {v4: uuidv4} = require('uuid');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNote(req.body, notes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    const params = req.params.id;
});

module.exports = router;