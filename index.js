const {Client, Intents} = require('discord.js')
const config = require('./config.json')
const fs = require('fs')

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})



client.once('ready',() => {
    console.log(`${client.user.username} is ready!`)
})

client.login(config.token)