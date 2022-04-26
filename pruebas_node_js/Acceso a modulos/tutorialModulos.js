let suma = (num1, num2) => num1 + num2;
let PI = 3.14;
class algo {
    constructor() {
        console.log("si");
    }
}
// module.exports.sum = suma;
// module.exports.pi = PI;
// module.exports.algo = algo;

module.exports = {
    sum: suma,
    pi: PI,
    clase: algo,
}