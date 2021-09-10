
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../../models/User'); 

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/',
[
    check('username', 'Username is required.').notEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6}),
    check('firstname', 'First name is required.').notEmpty(),
    check('lastname', 'Last name is required.').notEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, firstname, lastname } = req.body;

    try {
        let user = await User.findOne({ username });
        
        if (user) {
            return res.status(400).json({errors: [{ msg: 'User already exists'}] });
        }

        user = new User({
            username,
            password, // note this password is not encrypted yet
            firstname,
            lastname
        });

        // this is what we will use to do the hashing
        // bigger salt, better, but slower. 10 is probably fine
        const salt = await bcrypt.genSalt(10);
        // creates a hash, puts into user.password
        user.password = await bcrypt.hash(password, salt); 
        await user.save();

        //this creates the payload, which will be used to check
        //which user is trying to access other api calls
        // like profile?
        const payload = {
            user: {
                id: user.id //mongo uses _id, but mongoose creates an abstraction so we can use id
            }
        }

        // use jsonwebtokens for validation
        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: 360000 }, 
            //we do an error function for callback
            (err, token) => {
                if (err) throw err;
                res.json({ token });
                //this sends the token back to the client
            });
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


module.exports = router;