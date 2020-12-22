const { Client, MessageEmbed } = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `info`")
  const embed = new MessageEmbed()
    .setTitle("Hello, I'm Pixel Slave")
    .setDescription(
      "Hello, I'm the Pixel Slave Bot. My prefix is `$`. \n \n You can not invite me to your server"
    )
    .setColor(0x4f3d91);

  Message.channel.send(embed);
};

exports.config = {
  name: "info",
  aliases: [""]
};
