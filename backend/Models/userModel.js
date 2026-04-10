const mongoose = require('mongoose');
const userSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        default:"1234"
    },
    number : {
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    center:{
        type:String,
        required:true 
    },
    qua:{
        type:String
    },
    skill:{
        type:String
    },
    exp:{
        type:String
    },
    address:{
        type:String
    },
    profilePic:{
        type:String
    },
    status:{
        type:String,
        default:"u"
    }

},{
    timestamps:true
})

module.exports = mongoose.model('user',userSchema);