const express = require("express");
const app = express();

const taskPath = "/tasks";
const tasksRouter = express.Router();

tasksRouter.route("/")
    .get((req, res) => res.json("Get all tasks"))
    .post((req, res) => res.json("Create new task"));

tasksRouter.get("/:id", (req, res) => res.json('Get data about specific task'));

const studentPath = "/students";
const studentsRouter = express.Router();

studentsRouter.route("/")
    .get((req, res) => res.json("Get all students"))
    .post((req, res) => res.json("Create new student"));

studentsRouter.get("/:id", (req, res) => res.json('Get data about specific student'));

// Try to access to - http://localhost:3000/tasks
app.use(taskPath, tasksRouter);

// Try to access to - http://localhost:3000/students
app.use(studentPath, studentsRouter);

app.listen(3000);
