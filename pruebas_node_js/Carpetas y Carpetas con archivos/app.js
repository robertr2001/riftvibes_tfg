const fs = require("fs");

//crear una carpeta

// fs.mkdir("tutorial", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.rmdir("tutorial", (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Y lo borra al instante wot");
//             }
//         });

//     }
// });

//Crear carpeta con archivo, para borrar todo primero hay que borrar los archivos (fs.unlink);

// fs.mkdir("tutorial", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile("./tutorial/ejemplo.txt", "123", (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("creado todo");
//             }
//         });

//     }
// });

fs.readdir("tutorial", (err, files) => {
    if (err)
        console.log("err");
    else {
        for (let file of files) {
            fs.unlink("./tutorial/" + file, (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("quitado archivo");
                }
            })
        }
    }
})