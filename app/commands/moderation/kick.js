const Discord = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `kick`")
  let User =
    Message.mentions.members.first() ||
    Message.guild.members.cache.get(Args[0]);
  if (!Message.member.hasPermission("KICK_MEMBERS"))
    return Message.reply("You don't have the permission `KICK_MEMBERS`");
  if (!User) return Message.reply("You did not tag a user to kick");
  if (User.roles.highest.position >= Message.member.roles.highest.position)
    return Message.reply(
      "You cannot kick users with a role higher than yourself"
    );
  if (!User.kickable)
    return Message.reply(
      "I cannot kick this user because they have higher permissions than me"
    );

  let Tag = User.tag || User.user.tag;
  let Reason = Message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!Reason | (Reason == "")) {
    Reason = "N/A";
  }

  try {
    await Message.delete().then(_ => {
      User.send(
        "You were kicked from " + Message.guild.name + " " + `for \`${Reason}\``
      ).then(_ => {
        User.kick(`${Reason} - ${Message.author.tag}`).then(_ => {
          Message.channel.send(
            `:wave: I kicked \`${Tag}\`! (Kicked for \`${Reason}\`)`
          );
        });
      });
    });
  } catch (Error) {
    Message.delete().then(_ => {
      User.kick(`${Reason} - ${Message.author.tag}`).then(_ => {
        Message.channel.send(
          `:wave: User kicked: \`${Tag}\`! (Kicked them because \`${Reason}\`)`
        );
      });
    });
  }
};

exports.config = {
  name: "kick",
  aliases: [""]
}