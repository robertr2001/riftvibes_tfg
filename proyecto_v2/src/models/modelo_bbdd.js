const mongoose=require("mongoose");
const {Schema}= mongoose; //Permite definir el esquema de los datos
const datosCampeonLol=new Schema({
        idCampeon:{type: String,required:true},
        nombreCampeon:{type:String,required:true},
        urlSplashart:{type:String,required:false}
});


module.exports=mongoose.model("campeonesLoL",datosCampeonLol);
