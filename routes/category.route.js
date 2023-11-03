const {Router}=require("express")
const cate = require("../models/cat.schema")
const cat=Router()

cat.post("/create",async(req,res)=>{
    let data=await cate.create(req.body)
    res.status(201).send(data)
})

module.exports=cat