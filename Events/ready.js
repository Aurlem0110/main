const Discord = require("discord.js")
const loadSlashCommand = require("../Loader/loadSlashCommands")

module.exports = async bot => {

    await loadSlashCommand(bot)

    console.log(`${bot.user.tag} est en ligne !`)
}