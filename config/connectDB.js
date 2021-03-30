//brojla ma fiha chay cnxion DB cloud/local so i copied it :p  w hawka badelt DB_URI
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DataBase_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("database can not connect", error);
  }
};

module.exports = connectDB;
