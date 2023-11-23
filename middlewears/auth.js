const jwt=require("jsonwebtoken")
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
const IsAuth = (req, res, next) => {
    let cookie = req.cookies
    if (cookie.token) {
        let decoded = jwt.verify(cookie.token, 'the');
        console.log(decoded);
        next()
    }
    else{
        res.send("you are not authorize")
    }
}
module.exports={auth,finduser,IsAuth}