const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const fs = require('fs')

module.exports.run = async(client, msg, args) => {

    const mainHelp = new MessageEmbed()
        .setTitle("Main Help Page")
        .setDescription("This help page shows the main help page!")
        .setColor("RANDOM")
        .setFields(
            {name: "Main info page.", value: "https://github.com/Pironielsje/loseebot/blob/main/README.md"}
        )

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('fun')
                .setLabel('😂 Fun')
                .setStyle('PRIMARY')
        )    

    msg.reply({embeds: [mainHelp], components: [row]})

}

module.exports.help = {
    name: "help",
    category: "info",
    aliases: ["h", "he"],
    description: "Display's the help command"
}