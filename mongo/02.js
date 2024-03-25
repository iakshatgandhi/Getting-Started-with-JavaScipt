const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://akshatgandhi224663:AdrsfW67y4TVejRq@cluster0.d9zawrw.mongodb.net/viaExpress");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
    return ALL_USERS.some(
        (user) => user.username === username && user.password === password
    );
}

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const userExists = await User.findOne({ username });
    if(userExists) {
        return res.status(403).json({
            msg: "User already exists",
        });
    }  
    const user = new User({
        username,
        password,
        name
    });
    
    try {
        await user.save();
        return res.json({
        msg: "User saved successfully",
        });
    } catch (err) {
        return res.status(500).json({
        msg: "Error saving user",
        });
    }
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);