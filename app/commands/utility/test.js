const Discord = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " tested the bot")
  Message.channel.send("<@" + Message.author.id + ">, " + "I'm working!");
};

exports.config = {
  name: "test",
  aliases: [""]
};
