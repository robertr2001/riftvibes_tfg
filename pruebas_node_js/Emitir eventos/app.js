let EventEmitter = require("events");
let eventEmitter = new EventEmitter();
eventEmitter.on("tutorial", (num1, num2) => {
    console.log(num1 + num2);
})

eventEmitter.emit("tutorial", 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let yo = new Person("Yo");
let el = new Person("Cris");
yo.on("name", () => {
    console.log("El no es " + yo.name);
});
el.on("name", () => {
    console.log("El es " + el.name);
});

yo.emit("name");
el.emit("name");