const fs = require('fs');
let data = fs.readFileSync('messages.json');

console.log(data);