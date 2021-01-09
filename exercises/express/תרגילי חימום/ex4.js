const express = require('express');
const app = express();

app.get('/error', (req, res) => {
    throw 'Error Error Error'
});

// Add your code here

app.listen(5000, () => console.log("Listing to port 5000"));