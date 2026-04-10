const express = require('express')
const visitorModal = require('../Models/visitorModal')
const visitorRoute = express.Router();
   
visitorRoute.get('/' , async(req,res)=>{
    const visit = await visitorModal.find();
    return res.json({"msg":"Success","visit":visit})
})

visitorRoute.post('/' , async(req,res)=>{
     await visitorModal.create(req.body);
     return res.json({"msg":"Success"})
})

visitorRoute.get('/:id' , async(req,res)=>{
    const id = req.params.id;
    const visit = await visitorModal.findById(id);
    return res.json({"msg":"Success","visit":visit})
})

visitorRoute.put('/:id' , async(req,res)=>{
    const id =  req.params.id;
    const visit = await visitorModal.findByIdAndUpdate(id,req.body);
    return res.json({"msg":"Update Success" ,"visit":visit})
})

visitorRoute.delete('/:id' , async(req,res)=>{
    const id = req.params.id;
    const visit = await visitorModal.findByIdAndDelete(id);
    return res.json({"msg":"Delete"})
})

module.exports = visitorRoute;