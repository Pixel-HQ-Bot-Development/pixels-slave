const Discord = require("discord.js")

exports.run = async (Client, Message, Args) => {
    console.log(Message.author + " used command `8ball`")
    const answers = [

        "Yes!",
        "No",
        "Not sure, try again",
        "Sign points yes",
        "Very doubtful",
        "Reply hazy, try again",
        "Without a doubt!",
        "Sign points to yes",
        "100%",
        "Yes, of course!",
        "There is a small chance of you getting this",
        "Error, response not found"
      

    ];
    
   if(!Args[0]) return Message.reply("dude, enter a question lol")

   return Message.channel.send("<@"+Message.author.id+">, " + answers[Math.floor(Math.random() *  answers.length)])


}

exports.config = {
name: "8ball",
aliases: ["8b"],
}
