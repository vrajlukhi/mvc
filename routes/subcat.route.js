const {Router}=require("express")
const subcat = require("../models/subcat.schma")
const subcate=Router()

subcate.post("/create",async(req,res)=>{
    let data=await subcat.create(req.body)
    res.status(201).send(data)
})
subcate.get("/ui",async(req,res)=>{
    let data=await subcat.find().populate("categoryId")
    res.status(200).send(data)
})

module.exports=subcate