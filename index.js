const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "HELLOSAHILSINGH";

let users = [];

const auth = (req, res, next) => {
  const token = req.headers.token;
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid Token" });
  }
};

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signin.html"));
});

app.get("/dash", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dash.html"));
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  users.push({
    username: username,
    password: password,
    email: email,
  });
  console.log("sign up done ");
  res.json({ message: "you are signed up" });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "30d",
    });
    console.log("sign in done ");
    res.json({ token: token });
  } else {
    res.status(401).json({ message: "invalid username or password " });
  }
});

app.get("/me", auth, (req, res) => {
  const user = users.find((u) => u.username === req.user.username);

  if (user) {
    res.json({
      username: user.username,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(403).json({ message: "user not found " });
  }
});

app.listen(3000);
