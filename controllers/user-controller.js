var path=require("path");
var umodel=require(path.join(__dirname,"..","schemas","user-schema.js"));
var usermodel=umodel();
var doSignup=async (req,resp)=>{
    console.log(JSON.stringify(req.body));

    await usermodel.create(req.body,(err,result)=>{
        if(err)
        {
            resp.send(err);
            return;
        }
        resp.set("json");
        resp.json({msg:"User Saved"});
        // console.log(result);
    });
}

var doLogin=async(req,resp)=>{
    var user=await usermodel.find({uid:req.body.uid});

    if(user[0]==undefined)
    {
        resp.json({msg:"user not found"});
    }
    else
    {
        if(req.body.pwd==user[0].pwd)
        {
            // resp.set("json");
            
            resp.json({msg:"login successfull"});
        } 
        else
        {
            resp.json({msg:"invalid password"});
        }
    }
}
module.exports={doSignup,doLogin}