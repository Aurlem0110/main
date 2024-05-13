const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loader/loadSlashCommand.js")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)

bot.on("messageCreate", async message => {
    if (message.content === "quoi"){
        message.channel.send("Feur! :D")
    }
    
})