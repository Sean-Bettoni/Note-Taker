const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


function getNotes() {
    const dbPath = path.join(_dirname, '..', 'db', 'db.json');
    
    // load db.json file
    const file = fs.readFileSync(dbPath, 'utf-8')
    
    // parse the json into js object
    // return it
    return JSON.parse(file) || [];
}



router.get('/api/notes', (req, res) => {
    
    // retrieve all of our notes
    const notes = getNotes();

    res.json(notes);


})

module.exports = router;