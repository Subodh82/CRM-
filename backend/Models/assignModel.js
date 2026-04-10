const mongoose = require('mongoose')
const assignSchema = mongoose.Schema({
    enqid:{
        type:String,
        ref:'studentEnquiry'
    },
    assignby:{
        type:mongoose.Schema.Types.ObjectId,
        refpath:'assignbyModel'
    },
    assignbyModel:{
        type:String,
        enum:['admin','user']
    },
    assignto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    remark:{
        type:String
    },
    status:{
        type:String,
        default:'u'
    }
},{
    timestamps:true
})

 module.exports = mongoose.model('assign',assignSchema);
 