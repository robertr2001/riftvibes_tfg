const mongoose=require("mongoose");
const {Schema}= mongoose; //Permite definir el esquema de los datos

const usuario=new Schema({
        nombreUsuario:{type: String,required:true},
        contraseña:{type: String,required:true},
        nombreInvocador:{type: String,required:true},
        idSummoner:{type: String,required:true},
        region:{type: String,required:true},
        tokenSpotify:{type: String,required:false}
})

module.exports=mongoose.model("nuevoUsuario",usuario);