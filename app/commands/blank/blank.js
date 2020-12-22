const Discord = require('discord.js');

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `blank`")
  Message.react('⁉') 
  Message.channel.send("<@" + Message.author.id + ">, " + "use `$help` for a list of commands");
};


exports.config = {
  name: "",
  aliases: [" "]
};