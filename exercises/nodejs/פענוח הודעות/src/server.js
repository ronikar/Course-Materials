const fs = require('fs');
let data = fs.readFileSync('../data/messages.json');

console.log(data);