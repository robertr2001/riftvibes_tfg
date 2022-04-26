document.addEventListener("DOMContentLoaded", function() {
    reset();
    let form = document.getElementById("formulario");
    let datosValidos = true;
    form.onsubmit = function(event) {
        reset();
        // if (!comprobarCamposVacios()) {
        //     datosValidos = false;
        // }
        if (form.contrasena != form.contrasena2) {
            datosValidos = false;
        }
        console.log(form.contrasena + "    " + datosValidos);
        if (!datosValidos) {
            console.log("Datos invalidos");
            event.preventDefault();
        }
    }

    function reset() {
        datosValidos = true;
    }
});