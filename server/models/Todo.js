const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Todo = mongoose.model("todo", TodoSchema);