const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `urine`")
Message.react('💦')
  .then(console.log)
  .catch(console.error);
   
  const embed = new MessageEmbed()
    .setTitle("Urine XD")
    .setDescription("LOL URINE")
    .setColor(0x4f3d91)
    .setTimestamp()

  Message.channel.send(embed);
}

exports.config = {
name: "urine",
aliases: [""],
}