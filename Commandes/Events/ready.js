const Discord = require("discord.js")
const loadSlashCommand = require("../loaders/loadSlashCommands")

module.exports = async bot => {

    await loadSlashComman(bot)

    console.log('${bot.user.tag} est en ligne !')
}