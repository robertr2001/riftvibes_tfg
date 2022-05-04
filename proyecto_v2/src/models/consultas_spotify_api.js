

let urlPeticion = "https://api.spotify.com/v1/me/player/currently-playing";
let xhr = new XMLHttpRequest();
xhr.open("GET", urlPeticion);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", `Bearer ${datos.token_acceso}`);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    let informacion = xhr.response;
    console.log(informacion);
    datosRelevantes = {
      nombre_artistas: datosArtistas(informacion.item.artists, "name"),
      id_artistas: datosArtistas(informacion.item.artists, "id"),
      nombre_cancion: informacion.item.name,
      id_cancion: informacion.item.id,
    };
  }
};

function datosArtistas(datos, tipoDato) {
  let arrayDatos = [];
  datos.forEach((dato) => {
    arrayDatos.push(dato[tipoDato]);
  });
  return arrayDatos;
}
