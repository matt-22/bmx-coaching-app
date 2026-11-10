import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


// ######################### users #########################
export async function getUsers() {
    const [rows] = await pool.query("SELECT id, first_name, last_name, email, created_at  FROM users")
    return rows
}


export async function getUserById(id) {
    const [rows] = await pool.query(`
        SELECT first_name, last_name, email
        FROM users
        WHERE id = ?`,
    [id])
    return rows[0] // returns the 1st and only object in the array, ie returns the object rather than an array
}

export async function getUserByEmail(email) {
    const [rows] = await pool.query(`
        SELECT first_name, last_name, email
        FROM users
        WHERE email = ?`,
    [email])
    return rows[0] // returns the 1st and only object in the array, ie returns the object rather than an array
    }
// #########################################################
// create new user
export async function createUser(email, passwordHash ) {
    const [result] = await pool.query(`
        INSERT INTO users (email, password_hash)
        VALUES (?,?)`,
    [email.trim(), passwordHash])
    const id = result.insertId // the id of the newly created user
    return getUserById(id) // get the newly created user record and return it
            
}