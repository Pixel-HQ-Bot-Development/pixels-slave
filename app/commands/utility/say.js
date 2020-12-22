const Discord = require('discord.js');
exports.run = (bot, message, args) => {
  console.log(Message.author + " used command `say`")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('na bro (heres your creative spice jonathan');
    message.delete();
    message.channel.send(args.join(' ').replace("@everyone", "()").replace("@here", "()")).catch(console.error);
}


exports.config = {
  name: "say",
  aliases: [""]
};