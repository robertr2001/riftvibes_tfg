const fs = require("fs");

let readStream = fs.createReadStream("./ejemplo.txt", "utf8"); //hereda de eventlistener
let writeStream = fs.createWriteStream("./ejemplo2.txt");
//Va por trozos(chunks) lo cual lo hace mas eficiente
readStream.on("data", (chunk) => {
    writeStream.write(chunk);
});