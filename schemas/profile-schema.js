var mongoose=require("mongoose");
function getModel(){
    var schema= new mongoose.Schema({
        uid : String,
        name : String,
        mobile : String,
        address : String,
        city : String,
        idpic : String,
        
    });
    var usermodel=mongoose.model("profiles",schema);
    return usermodel;
}

module.exports=getModel