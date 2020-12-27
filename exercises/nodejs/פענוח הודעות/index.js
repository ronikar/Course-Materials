const child_process = require('child_process');

const server = child_process.fork("./server");
const workers = Array.from({ length: 3 }).map(_=> child_process.fork("./worker"));