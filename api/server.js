const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let students = [
  {
    id: 1,
    name: "João da Silva",
    history: "3º semestre",
    description: "",
    email: "j.silva@gmail.com",
    register: "1225209",
    cpf: "002.565.898-74",
  },
  {
    id: 2,
    name: "Patricia Gomes",
    history: "Novo aluno",
    description: "",
    email: "p.gomes@gmail.com",
    register: "1121209",
    cpf: "001.785.986-85",
  },
];

app.get("/students", (req, res) => {
  res.send(students);
});
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((student) => student.id === id);
  res.send(student);
});

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

app.listen(port);
