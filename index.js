const express=require("express");
const connect = require("./confing/user.db");
const router = require("./routes/user.routs");
const cookie=require("cookie-parser")
const session=require("express-session");
const passport=require("passport")
const local = require("./helper/local");
const pro_route = require("./routes/product.route");
const cat = require("./routes/category.route");
const subcate = require("./routes/subcat.route");
const app=express()
local(passport)
app.use(session({secret:"key"}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',(__dirname+"/views"))
app.use(express.static(__dirname+"/public"))
app.use(cookie())
app.use("/user",router)
app.use("/product",pro_route)
app.use("/category",cat)
app.use("/subcategory",subcate)

app.listen(7777,()=>{
    console.log("server 7777 start");
    connect()
})