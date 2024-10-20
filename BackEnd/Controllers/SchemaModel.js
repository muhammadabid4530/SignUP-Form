const Mongoose = require('mongoose');
const SchemaData = Mongoose.Schema({ userName: String,
     password: String,
      name: String });
module.exports = Mongoose.model("SignUP", SchemaData);