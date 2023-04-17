const pool = require('../db')

const getUsers = async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM users;');
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message)
    }
}

const getUserById = async (req, res) => {
    try{
        const { id } = req.params
        const fetchedUser = await pool.query ('SELECT * FROM users WHERE user_id = $1', [id])
        res.json(fetchedUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const createUser = async (req, res) => {
    try {
        const { username, password, first_name, last_name, birthday, email } = req.body
        let currentDate = new Date().toJSON()
        const newUser = await pool.query('INSERT INTO users (username, password, first_name, last_name, birthday, email, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7)', [username, password, first_name, last_name, birthday, email, currentDate])
        res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, password, first_name, last_name, birthday, email } = req.body
        const updatedUser = await pool.query('UPDATE users SET username = $1, password = $2, first_name = $3, last_name = $4, birthday = $5, email = $6 WHERE user_id = $7', [username, password, first_name, last_name, birthday, email, id])
        res.json("User updated")
    } catch (err) {
        console.error(err.message)
    }
}

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const deleteUser = await pool.query('DELETE FROM users WHERE user_id = $1', [id])
        res.json("User Deleted");
    } catch(err) {
        console.error(err.message)
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}