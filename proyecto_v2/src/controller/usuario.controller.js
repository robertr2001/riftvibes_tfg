const controladorUsuario={};
const consultasRiot=require("../models/consultas_riot_api.js");
const Usuario=require("../models/modelo_usuario");

controladorUsuario.getDatos=async (req,res)=>{
        const { nombreUsuario,contraseña,nombreInvocador,region,tokenSpotify,tokenSpotifyRefresh } = req.body;
        const idSummoner=String(await consultasRiot.getSummonerByName(String(nombreInvocador), region));
        const nuevoUsuario= new Usuario({nombreUsuario,contraseña,nombreInvocador,idSummoner,region,tokenSpotify,tokenSpotifyRefresh});
        await nuevoUsuario.save();
        res.json("boom");
}

module.exports=controladorUsuario;