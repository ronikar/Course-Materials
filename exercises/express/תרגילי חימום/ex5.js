const express = require('express');
const app = express();

// Fix the code 

app.get('/asyncerror', async (req, res) => {
    throw 'I am  the right error'
});

app.listen(5000, () => console.log("Listing to port 5000"));