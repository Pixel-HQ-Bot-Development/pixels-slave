const Discord = require("discord.js");
const letters = "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z"

exports.run = async (Client, Message, Args) => {
  console.log(Message.author + " used command `delete`")
  if(!Args[0]){
  Message.channel.send("bro how much u wanna delete")
  return
}
    else{
      if(Args[0].includes(letters)){
         Message.reply("that is not a number :angry:")
         return
      }
         else
      
      Message.channel.bulkDelete(Args[0] + 1);
      const sentMessage = await Message.channel.send("Cleared " + Args[0] + " messages :smile: :thumbsup:");
      sentMessage.delete({ timeout: 2000});
        }}
  

exports.config = {
  name: "delete",
  aliases: ["del"]
};