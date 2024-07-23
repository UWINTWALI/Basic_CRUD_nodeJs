// simple express app
require('dotenv').config();
const e = require('express')
const express = require('express')
const mysql = require('mysql2')
// const dotenv = require('dotenv')
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Welcome to node with express App")
})
// ceratin connection to db

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    
});


// CREATE DATABASE basic_crud;
// use basic_crud;
// create table users(
// `id` INT NOT NULL auto_increment,
// `name` VARCHAR(255) DEFAULT NULL,
// `address` VARCHAR(255) DEFAULT NULL,
// `country` VARCHAR(255) DEFAULT NULL,
// PRIMARY KEY(id)
// )

// creating a post request
app.post('/users', async (req, res) => {
    try {
        const { id, name, address, country } = req.body;

        // [ { insertId: 42 }, ... ] , The “insertId” represents the auto-generated
        // ID of the newly inserted user and is obtained from the result of the query.

        const [{ insertId }] = await connection.promise().query(`INSERT INTO users(name, address, country) values(?, ?, ?)`, [name, address, country]);
        res.status(202).json("User created successfully!" );        
    } catch (error) {
        res.status(500).json("error occured")
    }
});

// creating a get request
app.get('/users', async (req, res) => {
    try {
        const data =await connection.promise().query(`SELECT * FROM users`);
        res.status(202).json({ users: data[0]});
    } catch (error) {
        res.status(500).json("Error getting users");
    }

});

// get user by id
app.get('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await connection.promise().query(`SELECT * FROM users WHERE id=?`, [id]);

        if (data.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(202).json({ user: data[0][0]});
    } catch (error) {
        res.status(500).json({ error: "Error getting user by id" });
    }

});

// updata user by an id 
app.patch('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, country } = req.body;
        const update = await connection.promise().query(`UPDATE users SET name=?, address=?, country=? WHERE id =? `, [name, address, country, id]);
        // res.status(202).json({ updated_user: data[0]});
        res.status(202).json({ message: "Updated!!"});
    } catch (error) {
        res.status(500).json({error: "error occured updating user .."})
    }
})
// delete a user by id
app.delete('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await connection.promise().query(`DELETE FROM users WHERE id=?`, [id]);
        res.status(202).json({ message: "User Deleted successfully!!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})


const server = app.listen(3000,'127.0.0.1', function () {
    const host = server.address().address;
    const port = server.address().port
    console.log("The server is listening at http://%s:%s", host, port)
})


