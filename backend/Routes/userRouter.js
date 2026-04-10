const express = require('express');
const userModel = require('../Models/userModel');
const stEnqModel = require('../Models/stEnqModel');
const upload = require('../Middleware/upload');
const userRoute = express.Router();
userRoute.get('/',async(req,res)=>{
    const user = await userModel.find();
    return res.json({'msg':'success',user:user});
})
userRoute.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const user = await userModel.findById(id);
    return res.json({'msg':'success',user:user});
})
userRoute.post('/',async(req,res)=>{
    await userModel.create(req.body);
    return res.json({'msg':'success'});
})
userRoute.patch('/:id',upload.single('profilePic') ,async(req,res)=>{
    const id = req.params.id;
    console.log(req.file);
    await userModel.findByIdAndUpdate(id,{'profilePic':req.file.filename})
    return res.json({'msg':'success'});
})
userRoute.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const user = await userModel.findByIdAndUpdate(id,req.body);
    return res.json({'msg':'success'});
})

userRoute.put('/:id/:st', async(req,res)=>{
    const {id,st} = req.params;
    const status = st=="u"?"b":"u";
    const user = await userModel.findByIdAndUpdate(id,{status});
    if(st=="u"){
        await stEnqModel.updateMany({assignto:user._id},{$set:{assignto:null}});
    }  
    return res.json({'msg':"success"})
})

userRoute.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    return res.json({'msg':'success'});
})

module.exports = userRoute