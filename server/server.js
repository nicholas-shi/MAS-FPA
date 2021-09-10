require('dotenv').config()
const express = require('express');
const connectDB = require('./db/db');
const app = express();

app.use(express.json({ extended: false }));
// Connect to MongoDB Database
connectDB();

app.get('/', (req, res) => res.send('Reached API!!'));

// Routes
app.use('/api/todo', require('./routes/api/todo'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));