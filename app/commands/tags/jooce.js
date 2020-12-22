const Discord = require("discord.js")

exports.run = async (Client, Message, Args) => {
    console.log(Message.author + " used command `jooce`")
Message.channel.send('jooce is <:GAY:753396698809761872>')
}

exports.config = {
name: "jooce",
aliases: [""],
}