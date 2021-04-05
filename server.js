// In this file we're creating our serverr in few lines thanks to express
//So first of all let's install express and require it
const express = require("express");
//a7la a7la autoimportation lel connectDB
const connectDB = require("./config/connectDB");
//  Then we're creating an instance of express in app by that we're gining all features/methodes of express to app
const app = express();
//to use dotenv
require("dotenv").config();
//now we connect our app to the DB
connectDB();
// this line makes us able to parse JSON files through the body of our request
app.use(express.json());

//this part contains the main path
app.use("/api/contact", require("./router/router"));
//here we're creating our port
const port = process.env.PORT;

// create server
app.listen(port, (err) => {
  err ? console.error(err) : console.log(`server is running on ${port}`);
});
