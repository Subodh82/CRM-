const express = require('express');
const stEnqModel = require('../Models/stEnqModel');
const stEnqRouter = express.Router();
stEnqRouter.get('/', async  (req,res)=>{
    const user=  await stEnqModel.find().populate('assignto');
    return res.json({"msg":"Success","enq":user});
})

stEnqRouter.get('/:id' , async (req,res)=>{
    const id = req.params.id;
     const user=  await stEnqModel.findById(id);
    return res.json({"msg":"Get Student Enquiry","user":user});
})
stEnqRouter.post('/',async (req,res)=>{
    const user = req.body;
    await stEnqModel.create(user);
    res.json({"msg":"success"}); 
})
stEnqRouter.put('/:id' , async (req,res)=>{
    const id = req.params.id;
    const user = await stEnqModel.findByIdAndUpdate(id,req.body);
    res.json({"msg":"update"})
})

stEnqRouter.delete('/:id' , async (req,res)=>{
    const id = req.params.id;
    const user = await stEnqModel.findByIdAndDelete(id);
    res.json({"user":"delete success"})
}) 



module.exports = stEnqRouter;