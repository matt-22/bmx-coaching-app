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
    try {    
    const { email, password } = req.body
    const passwordHash = await argon2.hash(password, {type: argon2.argon2id}) // hash the password before sending to mysql
    const user = await createUser( email, passwordHash)
    res.status(201).send(user)
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                code: 'EMAIL_ALREADY_EXISTS',
                message: "An account with this email address already exists."
            })
        }
        console.error('Registration error:', error)
        return res.status(500).json({
            message: 'Unable to create your account.'
        })
    }
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