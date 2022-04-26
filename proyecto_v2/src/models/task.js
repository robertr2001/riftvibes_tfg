const mongoose=require("mongoose");
const {Schema}= mongoose; //Permite definir el esquema de los datos

const campeonLoL=new Schema({
    idCampeon:{type: Number,required:true},
    nombreCampeon:{type:String,required:true}

});

module.exports=mongoose.model("campeonLol",campeonLoL);
