const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res)=>{

    let user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send('Invalid username or password');

    if(user.role !== 'ADMIN') return res.status(403).send('Only admin users can access this area');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid username or password');


    const privateKey = fs.readFileSync(__dirname+'/../cert/private_key.key');

    const token = jwt.sign({_id: user._id, name: user.name, role: user.role, username: user.username, website: user.website}, privateKey, { algorithm: 'RS256'});
    res.header('X-Auth-Token', token).status(200).send(user);
})

module.exports = router;

/**
 * @swagger
 * /admin/auth:
 *   post:
 *     summary: Authenticate an admin user
 *     description: Authenticates an admin user by username and password, returns a token if successful.
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
 *                 description: Admin's username
 *                 example: "adminUser"
 *               password:
 *                 type: string
 *                 description: Admin's password
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Authentication successful, token returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The user ID
 *                   example: "5f8d04fe24d1f2a4a8d8324a"
 *                 name:
 *                   type: string
 *                   description: The user's name
 *                   example: "John Doe"
 *                 role:
 *                   type: string
 *                   description: The user's role
 *                   example: "ADMIN"
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                   example: "adminUser"
 *                 website:
 *                   type: string
 *                   description: The user's website
 *                   example: "https://example.com"
 *                 token:
 *                   type: string
 *                   description: Authentication token
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Invalid username or password
 *       403:
 *         description: Access denied, only admin users can access this area
 */
router.post('/', async (req, res) => {
    // Existing implementation
});



