const user = require("../models/user.schema")
const alldata=async(req,res)=>{
    let data=await user.find()
    res.status(200).send(data)
}
const adddata=async(req,res)=>{
    let data=await user.create(req.body)
    res.status(201).send(data)
}
const ui=async(req,res)=>{
    res.render("index")
}
const loginpage=async(req,res)=>{
    res.render("login")
}
const signuppage=async(req,res)=>{
    res.render("signup")
}
const signup=async(req,res)=>{
    let{email}=req.body
    let emaildata=await user.findOne({email:email})
    if(!emaildata){
        let data= await user.create(req.body)
        res.status(200).redirect("ui")
    }
    else{
        res.status(200).send({message:"account is already exist,login please."})
    }
}
const login=async(req,res)=>{
    // let{email,password}=req.body
    // let data=await user.findOne({email:email})
    // if(!data){
    //     res.status(200).send({message:"User not found"})
    // }
    // else if(password!=data.password){
    //     res.status(200).send({message:"Password is incorrect"})
    // }
    // else{
    //     res.status(200).cookie("id",data.id).send({message:"Login succesfully"})
    // }
    return res.status(200).redirect("/user/ui")
}
module.exports={alldata,adddata,signup,login,loginpage,signuppage,ui}