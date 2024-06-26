const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res)=>{

    let user = await User.findOne({'username':req.body.username});
    if(!user) return res.status(400).send('Invalid Username or Password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send({error: 'Invalid Username or Password',userId: user._id});

    const token = user.generateToken();
    res.header('X-Auth-Token', token).status(200).send(user);
})

module.exports = router;

   /**
    * @swagger
    * /auth:
    *   post:
    *     summary: Authenticate a user
    *     description: Authenticates a user by username and password, returns a token if successful.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             required:
    *               - username
    *               - password
    *             properties:
    *               username:
    *                 type: string
    *                 description: User's username
    *                 example: "user123"
    *               password:
    *                 type: string
    *                 description: User's password
    *                 example: "securePassword123"
    *     responses:
    *       200:
    *         description: Authentication successful, user and token returned
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    *               properties:
    *                 _id:
    *                   type: string
    *                   description: The user ID
    *                   example: "5f8d04fe24d1f2a4a8d8324a"
    *                 username:
    *                   type: string
    *                   description: The user's username
    *                   example: "user123"
    *                 token:
    *                   type: string
    *                   description: Authentication token
    *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    *       400:
    *         description: Invalid username or password
    */
   router.post('/', async (req, res) => {
    // Existing implementation
});


