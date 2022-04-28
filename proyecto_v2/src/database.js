const mongoose=require("mongoose");

const URI="mongodb://localhost/RiftVibes";

mongoose.connect(URI)//Lo voy a hacer en local, no se que hacer para subirlo de momento
    .then(_db =>console.log("DB conectada"))
    .catch(err=>console.log(err));

module.exports=mongoose;