var mongoose=require("mongoose");
function getModel(){
    var schema= new mongoose.Schema({
        uid : String,
        name : String,
        company : String,
        date : {type:Date},
        city : String,
        qty : String,
        units : String,
        pic : String
    });
    var usermodel=mongoose.model("medicines",schema);
    return usermodel;
}

module.exports=getModel