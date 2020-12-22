const Discord = require("discord.js")

exports.run = async (Client, Message, Args) => {
    console.log(Message.author + " used command `angel`")
Message.channel.send('angel loves to say $urine')
}

exports.config = {
name: "angel",
aliases: [""],
}