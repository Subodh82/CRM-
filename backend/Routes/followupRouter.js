const express = require('express');
const followupModel = require('../Models/followupModel');
const followupRouter = express.Router();
followupRouter.get('/',async(req,res)=>{
    const followup = await followupModel.find().populate('enqid').populate('uid');
    return res.json({'msg':"success",followup});
})

followupRouter.post('/',async(req,res)=>{
    await followupModel.create(req.body);
    return res.json({"msg":"success"});
})


module.exports = followupRouter;