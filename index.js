const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Users sever is running");
});

const users = [
  { id: 1, name: "sojib", email: "sojib@gmail.com" },
  { id: 2, name: "sabila", email: "sabila@gmail.com" },
  { id: 3, name: "sabnor", email: "sabnor@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Users post method");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  res.send(newUser);

  // add data to the database
  users.push(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
