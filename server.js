const express = require('express');
const app = express();

// If env port is not there fall back || to 3001
const PORT = process.env.PORT || 3001;

// Setting up middleware
app.use(express.static('public'));

// Setting up local host
app.listen(PORT, ()=>{
    
    console.log('app is running at http://localhost:' + PORT);

})
