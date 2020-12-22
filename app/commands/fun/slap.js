const { Client, MessageEmbed } = require('discord.js');

exports.run = (bot, message, args) => {
  console.log(Message.author + " used command `slap`")
    let Slap = message.content.split(" ").slice(1).join(" ")  
    if(!Slap) return message.reply('who u slapping?')
    
const embed = new MessageEmbed()
      .setDescription("<@" + message.author.id + "> slapped " + Slap)
      .setTitle('Slap')
      .setTimestamp()
      .setColor(0x4f3d91)
    message.channel.send(embed)
}


exports.config = {
  name: "slap",
  aliases: [""]
};