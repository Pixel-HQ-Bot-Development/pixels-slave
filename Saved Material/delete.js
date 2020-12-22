const Discord = require("discord.js");

exports.run = async (Client, Message, Args) => {  
if (!Message.member.hasPermission("MANAGE_MESSAGES"))
    return Message.reply(
      "Try again when you get perms :cry:"
    );
  else Message.channel.bulkDelete(100);
  const sentMessage = await Message.channel.send('Cleared 100 messages');
sentMessage.delete({ timeout: 2000 });
}