const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const uuid = require('uuid');
const dbPath = path.join(__dirname, '..', 'db', 'db.json');


function getNotes() {
    // load db.json file
    const file = fs.readFileSync(dbPath, 'utf-8')
    
    // parse the json into js object
    // return it
    // returning the json library and parsing the file defined above, if not successful it will instead return an empty array
    return JSON.parse(file) || [];
}



// get
router.get('/api/notes', (req, res) => {
    
    // retrieve all of our notes
    const notes = getNotes();

    res.json(notes);

})



// post
router.post('/api/notes', (req, res) => {

    // posting title into title
    const title = req.body.title;
    const text = req.body.text;

    // get all existing notes
    const existingNotes = getNotes();

    // add the new note to the notes array
    existingNotes.push({
        id: uuidv4(),
        title,
        text,
    })

    fs.writeFileSync(dbPath, JSON.stringify(existingNotes));

    return res.json(existingNotes);
})




// delete
router.delete('/api/notes/:id', (req, res) => {
    
    const noteId = req.params.id;

    //get all the notes
    const notes = getNotes();

    // filter out the note that we dont want
    const filtered = notes.filter ((note) => note.id !== noteId) 

    // save the remaining notes back into db.json
    fs.writeFileSync(dbPath, JSON.stringify(filtered));

    // return a response
    res.json(filtered)

})


module.exports = router;