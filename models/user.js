const mongoose = require("mongoose");
mongoose.pluralize(null);

const userSchema = mongoose.Schema( {
    username : String,
    password : String,
    name : String,
    age:String
});

const userModel = mongoose.model("User",userSchema);

module.exports= userModel;