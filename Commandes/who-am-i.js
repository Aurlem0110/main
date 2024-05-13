const Discord = require("discord.js");

module.exports = {
    name: "who-am-i",
    description: "T'as alzheimer en gros",
    permission: "Aucune",
    dm: false,

    async run(bot, message) {
        await message.reply("Ton Username: "+ message.user.username +"\n Ton ID: "+ message.user.id +"\n Ton ID d'avatar: "+ message.user.avatar +"\n Ton ID de serveur: "+ message.member.guild.id +"\n");    
    }
        
}