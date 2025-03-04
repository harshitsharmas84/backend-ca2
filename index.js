const express = require("express");
const port = 3000;
const app = express();

const users = [
  { email: "alice@example.com", password: "alice123" },
  { email: "bob@example.com", password: "bob123" },
  { email: "charlie@example.com", password: "charlie123" },
];

app.get("/", (req, res) => {
  res.json({ users });
});

app.put("/", (req, res) => {
  const { id, email, password } = req.query;
  if (email === users[id].email) {
    users[id] = {
      email,
      password,
    };
    res.json({ users });
  } else {
    res.json({ eror: "Email not found" });
  }
});

app.delete("/", (req, res) => {
  const { id, email } = req.query;
  if (email === users[id].email) {
    users[id].pop();
  }
  else{
    res.json({Message:"no user found"})
  }
});

app.delete("/", (req, res) => {
  const { email } = req.query;
  const deletEmail = users.find(email);
  deletEmail = {};
});

app.listen(port, () => console.log("port is runing"));
