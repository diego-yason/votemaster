// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: "../.env" });

import axios from "axios";
import * as Discord from "discord.js";

const client = new Discord.Client();

// for monitoring reasons
if (process.env.MONITOR) {
    const time: number = (<unknown>process.env.TIME > 0) ? <number> <unknown>process.env.TIME  : 300;
    setInterval(() => {
        axios.post(process.env.MONITOR);
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