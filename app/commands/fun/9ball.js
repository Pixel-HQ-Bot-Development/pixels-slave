const Discord = require("discord.js")

exports.run = async (Client, Message, Args) => {
    console.log(Message.author + " used command `9ball`")
    const answers = [

        "No!",
        "No",
        "Not sure, try again",
        "Sign points no",
        "Very doubtful",
        "Reply hazy, try again",
        "With a doubt!",
        "Sign points to no",
        "Definitely not",
        "No, of course!",
        "Error, response not found"
      

    ];
    
   if(!Args[0]) return Message.reply("dude, enter a question lol")

   return Message.channel.send("<@"+Message.author.id+">, " + answers[Math.floor(Math.random() *  answers.length)])


}

exports.config = {
name: "9ball",
aliases: ["9b"],
}
