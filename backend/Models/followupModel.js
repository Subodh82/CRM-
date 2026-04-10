const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const followupSchema = mongoose.Schema({
    enqid:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'studentEnquiry'
    },
    uid:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    status:{
        type:String,
        required:true
    },
    nextdate:{
        type:String,
    },
    programme:{
        type:String,
        required:true
    },
    remark:{
        type:String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('followup',followupSchema);