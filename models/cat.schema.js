const mongoose=require("mongoose")
const category=new mongoose.Schema({
    category:String
})
const cate=mongoose.model("category",category)
module.exports=cate