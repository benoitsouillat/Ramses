const fs = require("fs");

module.exports = async bot => {

    fs.readdirSync("./Events").filter(f => f.endsWith(".js") || f.endsWith(".ts")).forEach(async file => {

        let event = require(`../Events/${file}`);
        console.log(file.slice(0, -3));

        // bot.on(file.slice(0, -3));
    })
}