const { Client, MessageEmbed } = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `prodrole`")
  const embed = new MessageEmbed()
    .setTitle("Here's how to get the `Producer` role")
    .setDescription(
      "[Click me!](https://discord.com/channels/702021366613934171/702021366844620902/737817358017495092)"
    )
    .setColor(0x4f3d91);

  Message.channel.send(embed);
};

exports.config = {
  name: "prodrole",
  aliases: ["producerrole"]
};
