const express=require("express")
const check=(req,res,next)=>{
    let{name,email,password}=req.body
    if(name&&email&&password){
        next()
    }
    else{
        res.status(200).send({message:"enter all data"})
    }
}
module.exports=check