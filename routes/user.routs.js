const {Router}=require("express")
const {alldata, adddata, signup, login, ui, loginpage, signuppage } = require("../controllers/user.controller")
const check = require("../middlewears/signup")
const passport = require("passport")
const { auth } = require("../middlewears/auth")
const router=Router()

router.get("/",alldata)
router.post("/",adddata)
router.post("/signup",check,signup)
router.get("/signup",signuppage)
router.get("/login",loginpage)
router.post("/login",passport.authenticate("local"),login)
router.get("/ui",ui)
router.get("/user",auth,(req,res)=>{
    res.status(200).send(req.user)
})
module.exports=router