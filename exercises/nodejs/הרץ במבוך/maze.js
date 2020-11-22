const TARGET_FILENAME = "target.txt";
const TARGET_CONTENT = "You found the target";
const OTHER_CONTENT = "I am not the target";

function createMazeModel({ filename = TARGET_FILENAME, content = TARGET_CONTENT } = {}) {
    const depth = 1;
    const maze = _createMazeModel("maze", depth);

    _locateTarget(maze, { name: filename, content })

    return maze;
}

function _createMazeModel(name, depth) {
    const files = _createFileInfos();

    if (depth === 0) return { name, files };

    const subdirectories = Array.from({ length: _getRandomNumber() }, (_, i) => i + 1)
        .map(index => _createMazeModel(index.toString(), depth - 1));

    return { name, files, subdirectories };
}

function _createFileInfos() {
    const number = _getRandomNumber();
    const files = [];

    for (let i = 1; i <= number; i++) files.push({ name: `${i}.txt`, content: OTHER_CONTENT });

    return files;
}

function _locateTarget(maze, target, depth) {
    let level = 0;
    let currentDirectory = maze;

    while (level < depth || _doesLocateTaegetFileHere(depth) || !currentDirectory.subdirectories) {
        const { subdirectories } = currentDirectory;

        currentDirectory = subdirectories[_getRandomNumber(0, subdirectories.length)];
        level++;
    }

    currentDirectory.files.push(target);
}

function _doesLocateTaegetFileHere(depth) {
    return Math.random() < 1 / depth;
}

function _getRandomNumber(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

module.exports = {
    TARGET_FILENAME,
    TARGET_CONTENT,
    OTHER_CONTENT,
    createMazeModel
}