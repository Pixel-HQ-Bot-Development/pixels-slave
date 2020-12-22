const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `status`")
const status = Message.content.split(" ").slice(1).join(" ")
if (Message.author.id !== "364902391717298181" && Message.author.id !== "508036593123196950") {
  return Message.reply('you can not use this command');
  } else {
    if (!status) {
      return Message.reply("Missing Argument! You forgot to state what you want the status to be");
    } else {
      Client.user.setActivity(status, { type: 'PLAYING' })
      Message.reply("Done! Changed the status to `playing " + status + "`")
      }
    }
  }
   
exports.config = {
name: "status",
aliases: [""],
}
