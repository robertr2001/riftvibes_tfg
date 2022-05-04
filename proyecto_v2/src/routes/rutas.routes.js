const express =require("express");
const router= express.Router();//devuelve un objeto donde puedes meter rutas
const consultasRiot=require("../models/consultas_riot_api.js");
const champs=require("./champsIDs.json");
const campeonLol=require("../models/modelo_usuario");

 router.get("/:nombre",async(req,res)=>{//permite definir rutas en el servidor
     let idSummoner=String(await consultasRiot.getSummonerByName(req.params.nombre, "euw1"));
     let idCampeon=String(await consultasRiot.getInGameChampion(idSummoner, "euw1"));
     const nombreCampeon = await campeonLol.find({idCampeon: idSummoner}); 
     console.log(idCampeon);
     res.json(nombreCampeon);
 });
 router.route("/")
    .get()
    .post()
    .put()
    .delete()
    
// router.get("/bbdd",async(req,res)=>{//permite definir rutas en el servidor
//     campeonLol.remove()
//      champs.forEach(element => {
//           awaitcampeonLol.create([
//             element
//           ]);
//           console.log(element);
//     });
// });

router.post("/",async (req,res)=>{
    const { usuario, contraseña,invocador,region } = req.body;
    let idSummoner=String(await consultasRiot.getSummonerByName(invocador, region));
    let tokenSpotify="";
    const nuevoUsuario=new nuevoUsuario({usuario,contraseña,invocador,tokenSpotify,idSummoner});
    await nuevoUsuario.save();
    res.json("boom");
 });


module.exports=router;