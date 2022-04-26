let readLine = require("readline");
let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random()) * 10 + 1);
let num2 = Math.floor((Math.random()) * 10 + 1);
let resp = num1 + num2;

rl.question(`Cuanto es ${num1} + ${num2}?\n`, (userInput) => {
    if (userInput.trim() == resp) {
        rl.close();
    } else {
        rl.setPrompt("Incorrecto\n");
        rl.prompt();
        //Escuchar lo que pone el user;
        rl.on("line", (userInput) => {
            if (userInput.trim() == resp) {
                rl.close();
            } else {
                rl.setPrompt("Sigue siendo incorrecto\n");
                rl.prompt();
            }
        })
    }
});
//Esto se ejecuta por el close();
rl.on("close", () => {
    console.log("correcto");
});