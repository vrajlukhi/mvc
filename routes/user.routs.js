const {Router}=require("express")
const {alldata, adddata, signup, login, ui, loginpage } = require("../controllers/user.controller")
const check = require("../middlewears/signup")
const router=Router()

router.get("/",alldata)
router.post("/",adddata)
router.post("/signup",check,signup)
router.get("/login",loginpage)
router.post("/login",login)
router.get("/ui",ui)
module.exports=router