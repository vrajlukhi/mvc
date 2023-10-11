const user = require("../models/user.schema")
const alldata=async(req,res)=>{
    let data=await user.find()
    res.status(200).send(data)
}
const adddata=async(req,res)=>{
    let data=await user.create(req.body)
    res.status(201).send(data)
}
const signup=async(req,res)=>{
    let{email}=req.body
    let emaildata=await user.find({email})
    if(!email==emaildata){
        let data= await user.create(req.body)
        res.status(200).send(data)
    }
    else{
        res.status(200).send({message:"account is already exist"})
    }
}
const login=async(req,res)=>{
    let{email,password}=req.body
    let user=await user.findOne({email:email})
    if(!email==user){
        res.status(200).send({message:"User not found"})
    }
    else if(password!=user.password){
        res.status(200).send({message:"Password is incorrect"})
    }
    else{
        res.status(200).send({message:"Login succesfully"})
    }
}
const ui=async(req,res)=>{
    res.render("index")
}
module.exports={alldata,adddata,signup,login,ui}