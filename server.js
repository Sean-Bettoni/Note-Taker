const express = require('express');
const app = express();
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');



// If env port is not there fall back || to 3001
const PORT = process.env.PORT || 3001;

// Setting up middleware
app.use(express.static('public'));

// Injecting/loading routes into app
app.use(webRoutes);
app.use(apiRoutes);





// Setting up local host
app.listen(PORT, ()=>{
    
    console.log('app is running at http://localhost:' + PORT);

})
