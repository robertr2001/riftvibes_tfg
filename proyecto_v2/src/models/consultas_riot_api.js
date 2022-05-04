const riotKey = "api_key=RGAPI-351ee7e9-3e3b-46b1-ad45-3d58c1edb8a7";
//let idPersona = await getSummonerByName("Juasitos", "euw1", "id");
//let cosa = await getInGameChampion("euw1", idPersona);
//console.log(cosa);
const fetch=require("node-fetch");
//globalThis.fetch=fetch;
    let getSummonerByName= async function getSummonerByName(nombre, region) {
        //quitar espacios
        nombre = nombre.replace(" ", "");
        //peticion
        const peticion = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nombre}?${riotKey}`;
        let respuesta = await fetch(peticion);
        let datos = await respuesta.json();
        return datos.id;
        }
    
    let getInGameChampion = async function getInGameChampion(id,region) {
        //peticion
        const peticion = `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?${riotKey}`;
        let respuesta = await fetch(peticion);
        let partida = await respuesta.json();
        let datosJugadores = partida["participants"];
        for (let i = 0; i < 10; i++) {
            let datosJugador = datosJugadores[i];
            if (datosJugador.summonerId == id) {
                return datosJugador.championId;
            }
        }
    }

module.exports={
    getSummonerByName: getSummonerByName,
    getInGameChampion:getInGameChampion
}
    

