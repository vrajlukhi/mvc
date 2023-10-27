const mongoose=require("mongoose")

const proSchema=new mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    category:String,
})

const pro=mongoose.model("product",proSchema)

module.exports=pro