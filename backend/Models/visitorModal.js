const mongoose = require('mongoose')
const { applyTimestamps } = require('./stEnqModel')
const visitorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    purpose:{
     type:String
    },
    address:{
        type:String
    },
    remark:{
     type:String
    },
    role:{
       type:String,
    },
   center:{
    type:String,
   }
},{
    timestamps:true
})
module.exports= mongoose.model('visitor', visitorSchema)
 