const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); //importing our middleware
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require("../../models/User");

// @route   GET /api/auth
// @desc    Authorize an endpoint
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/',
[
    check('username', 'Username is required.').exists(),
    check('password', 'Password is required.').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res
                .status(400)
                .json({errors: [{ msg: 'Invalid Credentials'}] });
            // note: it is slightly safer to have a generic "invalid credentials" rather than
            // disclosing that the username does not exist (helps narrow down for attackers)
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res
                .status(400)
                .json({errors: [{msg : 'Invalid Credentials'}]});
        }

        const payload = {
            user: {
                id: user.id //mongo uses _id, but mongoose creates an abstraction so we can use id
            }
        }

        //this is how to make the token
        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: 360000 }, 
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
})
module.exports = router;