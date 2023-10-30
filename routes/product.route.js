const {Router}=require("express")
const pro = require("../models/product.schema")
const pro_route=Router()

pro_route.get("/",(req,res)=>{
    res.status(200).render("product")
})
pro_route.post("/create",async(req,res)=>{
    let data=await pro.create(req.body)
    res.status(200).send(data)
})
pro_route.get("/products",async(req,res)=>{
    let data=await pro.find()
    res.status(200).send(data)
})
pro_route.delete("/delete/:id",async(req,res)=>{
    let{id}=req.params
    let data=await pro.findByIdAndDelete(id)
    res.status(200).send(data)
})
pro_route.post("/update",async(req,res)=>{
    let{_id}=req.body
    let data=await pro.findByIdAndUpdate(_id,req.body)
    res.redirect("/product")
})

module.exports=pro_route