//Here we put our ingredients
//we start by calling the mongoose manbouz
const mongoose = require("mongoose");
//jiblna schema w model ya walid
const { Schema, model } = mongoose;
//let's create our dataaaa
const contactschema = new Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: Number,
});
// we end by exporting them "goodbyyye :'( "
module.exports = contactModel = model("contact", contactschema);
