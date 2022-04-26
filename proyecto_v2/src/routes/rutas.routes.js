const express =require("express");
const router= express.Router();//devuelve un objeto donde puedes meter rutas

router.get("/",(req,res)=>{//permite definir rutas en el servidor
    res.json({
        status:"Api works"
    });
});

module.exports=router;