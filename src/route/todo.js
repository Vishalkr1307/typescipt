"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get("", (req, res) => {
    res.status(200).send({ todos: todos });
});
router.post("/addTodo", (req, res) => {
    const body = req.body;
    var data = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(data);
    return res.status(200).send("data added successfully");
});
router.put("/updateTodo/:id", (req, res) => {
    const body = req.body;
    const index = todos.findIndex((item) => item.id == req.params.id);
    todos[index] = {
        id: todos[index].id,
        text: body.text
    };
    return res.status(200).send("data updated successfully");
});
router.delete("/updateTodo/:id", (req, res) => {
    const params = req.params;
    const todo = todos.filter((item) => item.id !== params.id);
    return res.status(200).send("data deleted successfully");
});
exports.default = router;
