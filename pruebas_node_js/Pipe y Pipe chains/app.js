const fs = require("fs");
const zlib = require("zlib"); //<=Comprime en zip 
const gunzip = zlib.createGunzip();
let readStream = fs.createReadStream("./ejemplo2.gz"); //hereda de eventlistener
let writeStream = fs.createWriteStream("./ejemplo3.txt"); //Extension Gz para lo de la compresion
//version resumida de copiar lo que hay dentro e un archivo hacia otro
//Con gzip 
readStream.pipe(gunzip).pipe(writeStream);