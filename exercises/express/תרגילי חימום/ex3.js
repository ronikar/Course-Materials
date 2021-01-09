const express = require('express');
const app = express();

// Add middleware here

app.get('/middleware', (req, res) => {
    res.json(req.roni);
});

app.listen(5000, () => console.log("Listing to port 5000"));