const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const user=mongoose.model("mvc",userschema)
module.exports=user