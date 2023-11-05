const auth=(req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.redirect("/login")
    }
}
const finduser = async(req ,res, next) =>{
    let {id} = req.cookies
    let data = await users.findOne()
    if(id){
        if(data.name == "piyush"){
            next()
        }
        else{
            res.send({message : "you are not access this site"})
        }
    }
    else{
        res.redirect("/login")
    }
}
module.exports={auth,finduser}