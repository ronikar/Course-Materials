const express = require("express");
const app = express();

app.use(express.json());

app.get("/:id", (req, res) => {
    const { body, params, query, headers } = req;
    res.json({ headers, body, params, query });
})

app.listen(3000);