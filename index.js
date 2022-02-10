const {Client, Intents, Collection} = require('discord.js')
const config = require('./config.json')
const fs = require('fs')

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.commands = new Collection()
client.category = new Collection()
client.aliases = new Collection()
client.description = new Collection()

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(file of cmdFiles) {

    const command = require(`./commands/${file}`)

    client.commands.set(command.help.name, command)
    client.category.set(command.help.category, command)
    client.aliases.set(command.help.aliases, command)
    client.description.set(command.help.description, command)

    console.log(`👌${file} LOADED!`)

}

client.once('ready',() => {
    console.log(`${client.user.username} is ready!`)
})

client.on('messageCreate', async(msg) => {

    if(msg.author.bot) return
    
    const prefix = config.prefix

    const msgArray = msg.content.split(" ")

    const command = msgArray[0]
    
    const args = msgArray[0]

    if(!msg.content.startsWith(prefix)) return

    const cmdData = client.commands.get(command.slice(prefix.length)) || client.aliases.get(command.slice(prefix.length))

    if(!cmdData) return

    try {
        await cmdData.run(client, msg, args)
    } catch (error) {
        console.error(error)
        msg.reply("Something went wrong!")
    }

})

client.login(config.token)