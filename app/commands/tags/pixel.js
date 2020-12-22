const Discord = require("discord.js")

exports.run = async (Client, Message, Args) => {
    console.log(Message.author + " used command `pixel`")
Message.channel.send('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvagabondish.com%2Fwp-content%2Fuploads%2Fgold-royal-crown-759296.jpg&f=1&nofb=1')
}

exports.config = {
name: "djpixel",
aliases: ["pixel", "dj", "dan"],
}