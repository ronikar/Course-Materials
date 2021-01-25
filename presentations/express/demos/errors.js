const express = require("express");
const app = express();

app.get("/", (req, res) => { throw new Error("Internal Error"); });

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json(err.toString())
});

app.listen(3000);