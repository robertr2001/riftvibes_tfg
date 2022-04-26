const express =require("express");
const router= express.Router();//devuelve un objeto donde puedes meter rutas

const campeonLol=require("../models/task");

router.get("/",async(req,res)=>{//permite definir rutas en el servidor
    const campeonesLol = await campeonLol.find();
    console.log(campeonesLol);
    res.json(campeonesLol);
});

router.post("/",async (req,res)=>{
    console.log(req.body);
});

module.exports=router;