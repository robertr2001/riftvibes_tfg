document.addEventListener("DOMContentLoaded", function() {
    let stringHash = window.location.hash;
    let cadenasDatos = stringHash.split("&");
    console.log(cadenasDatos);
    let datos = {
        token_acceso: cadenasDatos[0].split("=")[1],
        token_type: cadenasDatos[1].split("=")[1],
        expiracion: cadenasDatos[2].split("=")[1],
    }
    if (datos.length != 3) {
        console.log("No autorizado");
    } else {
        console.log(datos.token_acceso);
    }
})