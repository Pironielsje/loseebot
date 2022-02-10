const { MessageEmbed } = require('discord.js')
const fs = require('fs')

module.exports.run = async(client, msg, args) => {

    client.commands.map((command) => {

        const cmdName = command.help.name
        const cmdCat = command.help.category
        const cmdDesc = command.help.description

        msg.reply(`Ok: ${cmdName} ${cmdCat} ${cmdDesc}`)
    })

}

module.exports.help = {
    name: "help",
    category: "info",
    aliases: ["h", "he"],
    description: "Display's the help command"
}