const Discord = require("discord.js")
const {Collection} = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loader/loadCommands")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)

bot.on("messageCreate", async message => {
    if (message.content === "quoi"){
        message.channel.send("Feur! :D")
    }
    
})