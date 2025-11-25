import express from 'express'
import logger from 'morgan'
import cp from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import { createUser, generateToken, getUserByEmail, validateUser } from './services/user.js'

const port = process.env.PORT || 8080
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(logger('common'))
server.use(cp())
server.use(cors())

server.post('/api/login', async (req, res) => {
    try {
        const user = await getUserByEmail(req.body.email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isValid = await validateUser(req.body.email, req.body.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        cp.JSONCookie(token);
        res.send({ status: 'ok', message: "Welcome" });
    } catch (error) {
        throw error;
    }
})

server.post('/api/register', async (req, res) => {
    try {
        const existingUser = await getUserByEmail(req.body.email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = await createUser(req.body.username, req.body.email, req.body.password);
        res.status(201).json({ message: 'User created successfully', userId: newUser.id });
    } catch (error) {
        throw error;
    }
})

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})
