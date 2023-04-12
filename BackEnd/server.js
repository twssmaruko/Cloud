const express = require('express')
const bodyParser = require('body-parser')

const cors = require("cors");

const corsOptions = {
  origin: "http://127.0.0.1:5500",
};

const app = express()
app.use(cors(corsOptions));

const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.post("/register", (req, res, next) => {
    console.log("Register Body : " , req.body);
    res.send("true");
   });

app.post("/login", (req, res, next) => {
    console.log("Login Body : " , req.body);
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})