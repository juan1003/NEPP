import express from 'express'
import logger from 'morgan'
import cp from 'cookie-parser'
import cors from 'cors'

const port = process.env.PORT || 8080
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(logger('common'))
server.use(cp())
server.use(cors())

server.get("/test", (req: any, res: any) => {
    res.send("This is a test endpoint")
})

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
