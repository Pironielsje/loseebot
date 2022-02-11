const { MessageEmbed, MessageActionRow, MessageButton, Message } = require('discord.js')
const fs = require('fs')

module.exports.run = async(client, msg, args) => {

    const mainHelp = new MessageEmbed()
        .setTitle("Main Help Page")
        .setDescription("This help page shows the main help page!")
        .setColor("RANDOM")
        .setFields({ name: "Main info page.", value: "https://github.com/Pironielsje/loseebot/blob/main/README.md" }, { name: "Note", value: "Don't click the buttons twice. It will crash the bot fsr" })

    const funHelp = new MessageEmbed()
        .setTitle("Test")
        .setColor("RANDOM")

    const modHelp = new MessageEmbed()
        .setTitle("Moderation")
        .setColor("RANDOM")

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('fun')
            .setLabel('😂 Fun')
            .setStyle('PRIMARY'),
            new MessageButton()
            .setCustomId('moderation')
            .setLabel("🛠 Moderation")
            .setStyle('SECONDARY'),
            new MessageButton()
            .setCustomId('info')
            .setLabel("📰 Info")
            .setStyle('SECONDARY')
        )

    msg.reply({ embeds: [mainHelp], components: [row] })

    const filter = (interaction) => {
        if (interaction.user.id === msg.author.id) return true
        return interaction.reply("You aren't the message author!")
    }

    const collector = msg.channel.createMessageComponentCollector({
        filter,
        max: 1
    })

    collector.on("collect", (interactionButton) => {
        const id = interactionButton.customId

        switch (id) {
            case "fun":
                {
                    interactionButton.message.edit({ embeds: [funHelp], components: [row] })
                    interactionButton.reply({ content: 'I\'ve edited the message!', ephemeral: true })
                }

            case "moderation":
                {
                    interactionButton.message.edit({ embeds: [modHelp], components: [row] })
                    interactionButton.reply({ content: 'I\'ve edited the message!', ephemeral: true })
                }
        }
    })

}

module.exports.help = {
    name: "help",
    category: "info",
    aliases: ["h", "he"],
    description: "Display's the help command"
}