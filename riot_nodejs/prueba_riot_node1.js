const riotKey = "api_key=RGAPI-351ee7e9-3e3b-46b1-ad45-3d58c1edb8a7";
let idPersona = await getSummonerByName("i love handicap", "euw1", "id");
let cosa = await getInGameChampion("euw1", idPersona);
console.log(cosa);
async function getSummonerByName(nombre, region, infoSummoner) {
    //quitar espacios
    nombre = nombre.replace(" ", "");
    //peticion
    const peticion = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nombre}?${riotKey}`;
    let respuesta = await fetch(peticion);
    let datos = await respuesta.json();
    //devolver dato que se pida
    switch (infoSummoner) {
        case "accountId":
            return datos.accountId;
        case "id":
            return datos.id;
        case "puuid":
            return datos.puuid;
        default:
            break;
    }
}

async function getInGameChampion(region, id) {
    //peticion
    const peticion = `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?${riotKey}`;
    let respuesta = await fetch(peticion);
    let partida = await respuesta.json();
    let datosJugadores = partida["participants"];
    let idCampeon;
    for (let i = 0; i < 10; i++) {
        let datosJugador = datosJugadores[i];
        if (datosJugador.summonerId == id) {
            return datosJugador.championId;
        }
    }
}