const { Client, MessageEmbed } = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `help`")
  Message.channel.send(
    "<@" + Message.author.id + ">, " + "Sent to dms, get reading!"
  );

  const FunEmbed = new MessageEmbed()
    .setTitle("**Fun**")
    .setDescription(
      "`8ball` Ask the magic 8ball a question! \n **Permissions:** @everyone \n \n `yesno` Is the answer yes or no? \n **Permissions:** @everyone \n \n `9ball` Its just 8ball but all no \n **Permissions:** @everyone \n \n `gayrate` \n **Permissions:** @everyone"
    )
    .setColor(0x4f3d91)
    .setTimestamp()
    .setFooter("Sent by Pixel's Slave#3334");

  Message.author.send(FunEmbed);

  const UtilityEmbed = new MessageEmbed()
    .setTitle("**Utility**")
    .setDescription(
      "`avatar` Gives the avatar of a mentioned user, if none are mentioned, gives your avatar. \n **Permissions:** @everyone \n  \n  `info` Shows information about the bot \n **Permissions:** @everyone \n  \n  `invite` Invite the bot to your server! \n **Permissions:** @everyone \n  \n `ping` Shows the bot's latency in ms \n **Permissions:** @everyone \n \n  `say` Give an argument and it will delete the command message and say it back to you \n **Permissions** @everyone \n ***Usage*** \n ***Input:*** *$say hello* \n ***Output:*** *hello* \n Deletes your message instantly after you send the command \n \n `welcome` Sends a welcome message \n **Permissions:** @everyone \n \n `test` A simple send and receive command to check if the bot is running \n **Permissions:** \n @everyone \n \n `help` Shows this list \n **Permissions:** @everyone"
    )
    .setColor(0x4f3d91)
    .setTimestamp()
    .setFooter("Sent by Pixel's Slave#3334");

  Message.author.send(UtilityEmbed);

  const ModerationEmbed = new MessageEmbed()
    .setTitle("**Moderation**")
    .setDescription(
      "`kick` Kicks targeted user. \n **Permissions:** `'KICK_MEMBERS'` \n  \n `ban` Bans targeted user \n **Permissions:** `'BAN_MEMBERS'` \n \n `Status` Changes the status of the bot \n **Permissions:** `'MUST BE @DJ Pixel#0140'`"
    )
    .setColor(0x4f3d91)
    .setTimestamp()
    .setFooter("Sent by Pixel's Slave#3334");

  Message.author.send(ModerationEmbed);

};

exports.config = {
  name: "help",
  aliases: ["h"]
};