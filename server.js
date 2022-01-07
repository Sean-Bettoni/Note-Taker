const express = require('express');
const app = express();
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const path = require('path');

// If env port is not there fall back || to 3001
const PORT = process.env.PORT || 3001;

// Setting up middleware
// Middleware is a function that runs before every single request
app.use(express.static('public'));

// Before the request hits the web/api routes below we are using middleware to understand the json (express.json) and form data(express.urlencoded)
// This will turn the requests into a workable javascript object
app.use(express.json());



// Might not need this code
// app.use(express.urlencoded({extended: true}));



// Injecting/loading routes into app
app.use(webRoutes);
app.use(apiRoutes);



// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "404.html"));
// });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


// Setting up local host
app.listen(PORT, () => {
    console.log('app is running at http://localhost:' + PORT);
})
