const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
    console.log(Message.author + " used command `dmme`")
    Message.author.send(Args.join(' ').replace("@everyone", "").replace("@here", "")).catch(console.error);
}

exports.config = {
name: "dmme",
aliases: ["dm"],
}