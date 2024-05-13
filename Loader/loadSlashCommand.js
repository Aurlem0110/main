const fs = require ("fs")
const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord.js")

module.exports = async Slash => {

    let commands = [];

    fs.readdirSync('./Commandes').filter(f => f.endsWith(".js")).forEach(async file => {

        let command = require(`../Commandes/${file}`)
        if (!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'a pas de nom!`)
        commands += [command]
        console.log(command.toString())
        console.log(command)
        console.log(`Commande ${file} chargée avec succès !`)
    })

    console.log(commands)

    commands.forEach(Element => console.log(Element))

    // commands.forEach(async (command) => {
    //     let slashcommand = new Discord.SlashCommandBuilder()
    //     .setName(command.name)
    //     .setDescription(command.description)
    //     .setDMPermission(command.dm)
    //     .setDefaultMemberPermissions(command.permission === "Aucune" ? null : command.permissions)

    //     if(command.options?.length >= 1) {
    //         for (let i = 0; i < command.options.length; i++) {
    //             slashcommand[`add${command.options[i].type.slice(0,1).toLowerCase() + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => option.setName(command.options[i].name).setDescription(command.options[i].description).setRequired(command.options[i].required))
    //         }
    //     }
        
    //     await commands.push(slashcommand)
    // })

    // const rest = new REST({version: "10"}).setToken(Slash.token)

    // await rest.put(Routes.applicationCommands(Slash.user.id), {body: commands})
    // console.log("Commandes créées avec succès!")
}