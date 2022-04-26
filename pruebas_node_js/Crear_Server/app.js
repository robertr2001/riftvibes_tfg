const http = require("http");
const server = http.createServer((req, res) => {
    //comprueba que se esta usando el dominio raiz? idk par aque es esto
    if (req.url === "/") {
        res.write("hello world otra vez");
        res.end();
    } else {
        //para != localhost:3000/ , ej: 3000/banana
        res.write("ahjsdokpal");
        res.end();
    }
});

server.listen("3000");

//localhost:3000