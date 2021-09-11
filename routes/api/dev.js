const express = require('express');
const router = express.Router();
const Todo = require("../../models/Todo");
const User = require('../../models/User'); 
const mongoose = require('mongoose');

router.get('/users', async (req, res) => {
    try {
        let users = await User.find()
        return res.status(200).json(users);
    } catch (err) {
        console.error(err);
        return res.status(500);
    }

})

// delete later
router.get('/', async (req, res) => {
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

router.delete('/todo', async (req, res) => {
    try {
        Todo.collection.drop();
        mongoose.connection.db.listCollections().toArray(function (err, names) {
            return res.status(200).json(names);
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: err });
    }
})

// for dev testing/debugging purposes
router.delete('/users', async (req, res) => {
    try {
        User.collection.drop();
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