const child_process = require('child_process');
const path = require('path');

const server = child_process.fork("./server", { cwd: __dirname });
const workers = Array.from({ length: 3 }).map(_=> child_process.fork("./worker", { cwd: __dirname }));