const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto"); //generate random ID for the posts

const app = express();
app.use(bodyParser.json()); // use json for body

//storage object
const posts = {};
//root handlers
app.get("/posts", (req, res) => {
  res.send(posts);
});
//root handlers
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex"); // 4 bytes with hex format
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]); // response with 201 code success and the new post
});
//Port
app.listen(4000, () => {
  console.log("Listening on 4000");
});
