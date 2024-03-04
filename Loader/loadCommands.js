

module.exports = async bot => {
    var fs = require('fs');
    fs.readdirSync('./Commandes').filter(f => f.endsWith(".js")).then(async file => {

        let command = require('../Commandes/${file}.js')
        if (!command.name || typeof command.name !== "string") throw new TypeError("La commande ${file.slice(0, file.length - 3)} n'a pas de nom!")
        bot.commands.set(command.name, command)
        console.log("Commande ${file} chargée avec succès !")
    })
}