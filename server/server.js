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
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/dev', require('./routes/api/dev'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));