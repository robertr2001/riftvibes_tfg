const express =require("express");
const router= express.Router();//devuelve un objeto donde puedes meter rutas
const consultasRiot=require("../models/consultas_riot_api.js");
const fetch=require("node-fetch");
const campeonLol=require("../models/modelo_bbdd");

router.get("/:nombre",async(req,res)=>{//permite definir rutas en el servidor
    let info=String(await consultasRiot.getSummonerByName(req.params.nombre, "euw1"));
    console.log("El champ es"+info);
    const nombreCampeon = await campeonLol.find({idCampeon: info}); //Por que esto no funciona si uso idCampeon???
    console.log(nombreCampeon);
    res.json(nombreCampeon);
});

router.post("/",async (req,res)=>{
    req.body=champsIDs;
    const { idCampeon, nombreCampeon }=req.body;
    const clol=new campeonLol({idCampeon,nombreCampeon});
    await clol.save();
    res.json({status:"guardado"});
 });

router.put({

});


module.exports=router;