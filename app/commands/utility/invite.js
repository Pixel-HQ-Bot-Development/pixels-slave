const { Client, MessageEmbed } = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `ping`")
  const embed = new MessageEmbed()
    .setTitle("Invite me to your server!")
    .setDescription(
      "[Click Here!](https://discord.com/api/oauth2/authorize?client_id=769392455371063306&permissions=2147483639&scope=bot)"
    )
    .setColor(0x4f3d91)
    .setTimestamp();
  Message.channel.send(embed);
};

exports.config = {
  name: "invite",
  aliases: ["inv"]
};
