const express = require("express");
const app = express();

const router = express.Router();
router.get("/router/1", (req, res) => res.json("I am problematic router 1"));
router.get("/router/2", (req, res) => res.json("I am problematic router 2"));

app.get('/', (req, res) => res.json('I am fine'));

app.use(router);

app.listen(5000, () => console.log("Listing to port 5000"));
