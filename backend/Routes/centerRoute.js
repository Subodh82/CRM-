const express = require('express');
const centerModel = require('../Models/centerModel');
const userModel = require('../Models/userModel');
const stEnqModel = require('../Models/stEnqModel');
const centerRoute = express.Router();


centerRoute.get('/',async(req,res)=>{
    const center = await centerModel.find();
    return res.json({"msg":"Success","center":center})
});

centerRoute.post('/',async(req,res)=>{
    await centerModel.create(req.body);
    return res.json({"msg":"Success"});
});

centerRoute.get('/:id', async (req,res)=>{
    const id = req.params.id;
    const center = await centerModel.findById(id);
    return res.json({"msg":"Success","center":center}); 
});

centerRoute.put('/:id',async(req,res)=>{
    const id= req.params.id;
    const center = await centerModel.findByIdAndUpdate(id,req.body);
    return res.json({"msg":"Success"});
    
});
centerRoute.put('/:id/:st', async(req,res)=>{
    const {id,st}= req.params;
    let status = st=="Active"?"Deactive":"Active";
    let ust = st=="Active"?"b":"u";
    let est = st=="Active"?"b":"u";
    const center = await centerModel.findByIdAndUpdate(id,{status});
        await userModel.updateMany({center:center.name} ,{$set:{status:ust}})
        await stEnqModel.updateMany({center:center.name} ,{$set:{status:est}})
    return res.json({"msg":"Success",center});
})
centerRoute.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    await centerModel.findByIdAndDelete(id);
    return res.json({"msg":"Success"});
})


module.exports = centerRoute;