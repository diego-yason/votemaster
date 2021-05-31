"use strict";
exports.__esModule = true;
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: "../.env" });
var axios_1 = require("axios");
var Discord = require("discord.js");
var client = new Discord.Client();
// for monitoring reasons
if (process.env.MONITOR) {
    var time = (process.env.TIME > 0) ? process.env.TIME : 300;
    setInterval(function () {
        axios_1["default"].post(process.env.MONITOR);
    }, time * 1000);
}
// check for .env values
if (!process.env.TOKEN) {
    throw new TypeError("No token specified in .env file.");
}
if (!process.env.SQLUSER || !process.env.SQLPASS) {
    throw new TypeError("SQL credentials are not specified. Check README on how to set it up.");
}
client.login(process.env.TOKEN);
//# sourceMappingURL=../src/build/index.js.map