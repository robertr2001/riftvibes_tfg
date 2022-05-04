const express =require("express");
const router= express.Router();//devuelve un objeto donde puedes meter rutas
const {getDatos}= require("../controller/usuario.controller");


router.route("/")
.get()
.post(getDatos)
.put()
.delete()

//  router.get("/",async(req,res)=>{//permite definir rutas en el servidor
//      console.log("nombreCampeon");
//      res.json("nombreCampeon");
//  });
 
// router.post("/",async (req,res)=>{
//     const { nombreUsuario,contraseña,nombreInvocador,region } = req.body;
//     const idSummoner=String(await consultasRiot.getSummonerByName(String(nombreInvocador), region));
//     let tokenSpotify="";
//     const nuevoUsuario= new Usuario({nombreUsuario,contraseña,nombreInvocador,idSummoner,region,tokenSpotify});
//     await nuevoUsuario.save();
//     res.json("boom");
//  });


module.exports=router;