const fs = require("fs");
//create a file
// fs.writeFile("ejemplo.txt", "Escritura de ejemplo", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("creado");
//         fs.readFile("ejemplo.txt", "utf8", (err, file) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });

//Renombrar un archivo

// fs.rename("ejemplo.txt", "nuevoNombre.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Bien hecho ricardiño");
//     }
// });

//Añadir datos al final del archivo

// fs.appendFile("nuevoNombre.txt", "\nDatos nuevos al final", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Bien hecho ricardiño");
//     }

// })

//Borrar archivo

fs.unlink("nuevoNombre.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Bien hecho ricardiño");
    }
});