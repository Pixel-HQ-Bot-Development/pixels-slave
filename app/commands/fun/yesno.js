const Discord = require("discord.js");

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `yesno`")
  const answers = ["Yes!",
   "No!"
  ];

  if (!Args[0]) return Message.reply("dude, enter a question lol");

  return Message.channel.send(
    "<@" +
      Message.author.id +
      ">, " +
      answers[Math.floor(Math.random() * answers.length)]
  );
};

exports.config = {
  name: "yesno",
  aliases: ["yn"]
};