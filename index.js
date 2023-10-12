const express=require("express");
const connect = require("./confing/user.db");
const router = require("./routes/user.routs");
const cookie=require("cookie-parser")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',(__dirname+"/views"))
app.use(express.static(__dirname+"/public"))
app.use(cookie())
app.use("/user",router)

app.listen(7777,()=>{
    console.log("server 7777 start");
    connect()
})