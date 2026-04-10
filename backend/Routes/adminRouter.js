const express = require('express');
const adminModel = require('../Models/adminModel');
const userModel = require('../Models/userModel');
const stEnqModel = require('../Models/stEnqModel');
const centerModel = require('../Models/centerModel');
const followupModel = require('../Models/followupModel');
const assignModel = require('../Models/assignModel');
const adminRouter = express.Router();



adminRouter.post('/login' ,async (req,res)=>{
    const{username,password}=req.body;
    const admin = await adminModel.findOne({username});
    if(admin){
        if(admin.password==password){
            res.json({msg:"success",role:"admin",id: admin._id})

        }
        else{
            res.json({msg:"password not match"})
        }
    }
    else{
        // res.json({msg:"user not exsist"})
        const user = await userModel.findOne({'email':username});

        if(user){
            if(user.password==password){
                if(user.status!="u"){
                    res.json({msg:"Your Account is Blocked"})
                }
                res.json({msg:"success",role:user.role,id:user._id})
            }
            else{
                res.json({"msg":"password not match"})
            }
        }
        else{
            res.json({"msg":"User not found"})
        }
    } 
})

adminRouter.get('/stats',async (req,res)=>{
    const enq = await stEnqModel.find();
    const user = await userModel.find();
    const center = await centerModel.find();
    const followup = await followupModel.find().populate("enqid").populate("uid");
    const assign  = await assignModel.find();


    res.json({"msg":"success","allenq":enq,"user":user.length,"center":center,"followup":followup,"assign":assign.length})
})


module.exports = adminRouter;  