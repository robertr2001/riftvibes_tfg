document.addEventListener("DOMContentLoaded", function() {
    let stringHash = window.location.hash;
    let cadenasDatos = stringHash.split("&");
    console.log(cadenasDatos);
    let datos = {
        token_acceso: cadenasDatos[0].split("=")[1],
        token_type: cadenasDatos[1].split("=")[1],
        expiracion: cadenasDatos[2].split("=")[1],
    }
    console.log(datos.token_acceso);
    let datosRelevantes;
    let urlPeticion = "https://api.spotify.com/v1/me/player/currently-playing";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", urlPeticion);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${datos.token_acceso}`);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let informacion = xhr.response;
            console.log(informacion);
            datosRelevantes = {
                nombre_artistas: datosArtistas(informacion.item.artists, "name"),
                id_artistas: datosArtistas(informacion.item.artists, "id"),
                nombre_cancion: informacion.item.name,
                id_cancion: informacion.item.id
            }
            let datosJson = JSON.stringify(datosRelevantes);

        }
    }
    let botonManual = document.getElementById("botonManual");
    botonManual.addEventListener("click", function() {
        let envioxhr = new XMLHttpRequest();
        envioxhr.open("POST", "recibo.php");
        envioxhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        envioxhr.send(datosJson);

        envioxhr.onload = function() {
            if (envioxhr.status != 200) {
                alert(`Error ${envioxhr.status}: ${envioxhr.statusText}`);
            } else {
                console.log("enviado");
            }
        }
    })

    function datosArtistas(datos, tipoDato) {
        let arrayDatos = [];
        datos.forEach(dato => {
            arrayDatos.push(dato[tipoDato]);
        });
        return arrayDatos;
    }
})