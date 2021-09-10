const express = require('express');
const router = express.Router();
const Todo = require("../../models/Todo");
const { check, validationResult } = require("express-validator");

// delete later
const mongoose = require('mongoose');

// @route           GET /api/todo/all
// @desc            Gets ALL todo
// @access          Public
router.get('/all', async (req, res) => {
    try {
        const { limit } = req.body;

        if (limit) {
            todos = await Todo.find().limit(limit);
        } else {
            todos = await Todo.find();
        }
        return res.status(200).json(todos);
    } catch (err) {
        console.error(err);
        return res.status(500).json({msg: "Error getting todos"})
    }
})

// @route           GET /api/todo/:id
// @desc            Get a todo
// @access          Public
router.get('/:id', async (req, res) => {
    try {
        todo = await Todo.findById(req.params.id);
        return res.status(200).json(todo);
    } catch (err) {
        console.error(err);
        return res.status(500).json({msg: "Error getting todo"})
    }
})

// @route           POST /api/todo/
// @desc            Post a TODO to the database
// @access          Public
router.post('/', [
    check("name", "Name required for a todo").notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    try {
        const newTodo = await Todo.create({
            name,
            description
        });

        return res.status(200).json({
            msg: "Todo successfully created",
            todo: newTodo
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Error creating/pushing todo to database"
        })
    }
});

// @route           UPDATE /api/todo/:id
// @desc            Update a TODO
// @access          Public
router.put('/:id', [
    check("name", "Name required for a todo").notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;
    newTodo = {
        name
    }
    if (description) newTodo.description = description;


    try {
        let todo = await Todo.findById(req.params.id);
        if (todo) {
            todo = await Todo.findByIdAndUpdate(req.params.id, { $set: newTodo });
            return res.status(200).json({
                msg: "Updated todo",
                todo: newTodo
            })
        } else {
            return res.status(400).json({
                msg: "Could not update, perhaps ID does not exist?"
            })
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Error updating todo. Perhaps the ID is invalid."
        })
    }
})

// @route           DELETE /api/todo/:id
// @desc            Delete a TODO
// @access          Public
router.delete('/:id', async (req, res) => {
    try {
        // StackOverflow recommendation to check if id provided is valid
        // Prevents needing to check error type in the catch
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ msg: 'Todo not found.' });
        }

        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ msg: "No todo found" });
        }

        await todo.remove();
        return res.status(200).json({ msg: "Todo removed" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Error creating/pushing todo to database"
        })
    }
});


// delete later
router.get('/dev', async (req, res) => {
    try {
        mongoose.connection.db.listCollections().toArray(function (err, names) {
            // console.log(names); // [{ name: 'dbname.myCollection' }]
            return res.status(200).json(names);
        });

    } catch (err) {
        console.error(err);
        return res.status(500);
    }

})

router.delete('/dev', async (req, res) => {
    try {
        Todo.collection.drop();
        mongoose.connection.db.listCollections().toArray(function (err, names) {
            // console.log(names); // [{ name: 'dbname.myCollection' }]
            return res.status(200).json(names);
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: err });
    }
})
module.exports = router;