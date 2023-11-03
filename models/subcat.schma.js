const mongoose=require("mongoose")
const subcategory=new mongoose.Schema({
    subcategory:String,
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"category"}
})
const subcat=mongoose.model("subcategory",subcategory)
module.exports=subcat