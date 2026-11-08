import express from 'express'
import { getUserById, createUser, getUsers } from './database.js'
import argon2 from 'argon2'
import cors from 'cors'


const app = express()
const PORT = 8080;
app.use(express.json()) // allow express to read JSON request bodies
app.use(cors({
    origin: 'http://localhost:4200'
}))


app.post("/api/v1/users", async (req, res) => {
    const { email, password } = req.body
    const passwordHash = await argon2.hash(password, {type: argon2.argon2id})
    const user = await createUser( email, passwordHash)
    res.status(201).send(user)
})


app.get("/api/v1/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUserById(id)
    //res.send(user)
    res.send("This should be the users list")
})

app.get("/api/v1/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})