module.exports.run = async (client, msg, args) => {
    msg.reply("TOSTI")
    const category = client.category.get('test')
    console.log(category)
}

module.exports.help = {
    name: "test",
    category: "test",
    aliases: ["tosti"],
    description: "HOI!"
}