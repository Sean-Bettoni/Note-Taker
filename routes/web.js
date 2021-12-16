const express = require('express');
const path = require('path');
const router = express.Router();


// index.html route
router.get('/', (req, res) => {
    
    // join is used to bypass mac/windows/linux syntax which is why the path is written out character by character(to avoid using \ and /).
    const indexHtmlPath = path.join(__dirname, '..', 'public', 'index.html');

    res.sendFile(indexHtmlPath);
});



// notes.html route
router.get('/notes', (req, res) => {
    
    // join is used to bypass mac/windows/linux syntax which is why the path is written out character by character(to avoid using \ and /).
    const notesHtmlPath = path.join(__dirname, '..', 'public', 'notes.html');

    res.sendFile(notesHtmlPath);
});



module.exports = router;