"use strict";

const { Client, MessageEmbed } = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `avatar`")
  let User =
    Client.users.cache.get(Args[0]) ||
    Client.users.cache.find(
      user => user.username.toLowerCase() === Args.join(" ").toLowerCase()
    ) ||
    Message.mentions.users.first() ||
    Message.author;

  const embed = new MessageEmbed()
    .setTitle("Here is the avatar!")
    .setColor(0x4f3d91)
    .setImage(User.displayAvatarURL() + "?size=2048");

  Message.channel.send(embed);
};

exports.config = {
  name: "avatar",
  aliases: ["av"]
};
