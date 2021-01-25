const express = require("express");
const app = express();

const middleware = (req, res, next) => {
    console.log("Url:", req.url);
    next();
}

app.get("/test1", (req, res) => res.send("test1"));

app.use(middleware);

app.get("/test2", (req, res) => res.send("test2"));

app.listen(3000);

