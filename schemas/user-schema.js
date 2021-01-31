var mongoose=require("mongoose");
function getModel(){
    var schema= new mongoose.Schema({
        uid : String,
        pwd : String,
        dos: {type:Date,default:Date.now }
    });
    var usermodel=mongoose.model("users",schema);
    return usermodel;
}

module.exports=getModel