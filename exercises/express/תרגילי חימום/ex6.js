const express = require("express");
const app = express();

const router = express.Router();
router.route('/').get((req, res) => res.json("I am router"))

// Add your code here

app.listen(5000, () => console.log("Listing to port 5000"));
