const user = require("../models/user.schema")
const nodemailer=require("nodemailer")
const jwt=require("jsonwebtoken")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vrajlukhi@gmail.com',
      pass: 'ljck pevu jswp kcht'
    }
  })
 
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
    let{email,password}=req.body
    let data=await user.findOne({email:email,password:password})
    if(data){
        let token = jwt.sign({ username: data.username }, 'the');
        res.cookie("token",token).send("done")
        console.log(token);
    }
    else{
        res.send("first signup")
    }
}
let otp=Math.floor(Math.random()*10000)
const reset=async(req,res)=>{
    let{email}=req.body
    var mailOptions = {
        from: 'vrajlukhi@gmail.com',
        to: email,
        subject: "password reset",
        html: `<h1>otp:${otp}</h1>`
      };
        await transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
          console.log(error);
        } else {
          console.log(info);
        }
      });
    res.status(200).send("sending otp")
}
const resetpass=async(req,res)=>{
    let{password,cotp,email}=req.body
    if(cotp==otp){
        let userdata=await user.findOne({email:email})
        if(userdata){
            userdata.password=password
            await userdata.save()
            res.status(200).send("change password")
        }
        else{
            res.status(200).send("user not found")
        }
    }
    else{
        res.status(200).send("wrong otp")
    }
}
const data=async(req,res)=>{
    let data=await user.find()
    res.send(data)
}
module.exports={alldata,adddata,signup,login,loginpage,signuppage,ui,reset,resetpass,data}