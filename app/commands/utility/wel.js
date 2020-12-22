const { Client, MessageEmbed } = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `welcome`")
  const embed = new MessageEmbed()
    .setTitle("Welcome to the server!")
    .setDescription(
      "Hi! Welcome to Pixel HQ. You can head over to <#702021366844620902> to get yourself some custom roles. We have a music festival in minecraft going on, you can find the invite to the discord server in <#702021366617997417>")
    .setFooter("This bot was created by DJ Pixel#0140 and Church Dude#1088. If any problems occur, DM them")
    .setColor(0x4f3d91);
    
  
  Message.channel.send(embed);
};

exports.config = {
  name: "wel",
  aliases: ["welcome"]
};
