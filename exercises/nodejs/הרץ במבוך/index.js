
const { createMazeModel } = require("./maze");
const createMaze = require("./createMaze")

async function init(){
    const mazeModel = createMazeModel();
    await createMaze(mazeModel);
}

init();