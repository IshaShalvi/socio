module.exports.profile=function(req,res){
    res.render('user_profile',{
        title:"User Profile"
    });

}

module.exports.signUp=function(req,res){
   return res.render('user_sign_up',{
       title:"Socio  | Sign Up"
   });
}


module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Socio | Sign In"
    });
}

module.exports.create=function(req,res){
    //todo later
}

module.exports.createSession=function(req,res){
    //todo later
}