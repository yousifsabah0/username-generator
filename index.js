const generator = require("./generator");
const checker = require("./checker");

module.exports = checker(generator(4));
