const Discord = require("discord.js");
const Client = new Discord.Client();
var token = ('you arent getting it')



Client.on("ready", () => {
  console.log("I'm online!");
  console.log("Logged in as Pixel's Slave#3334");


  Client.aliases = new Discord.Collection();
  Client.commands = new Discord.Collection();
  require(`C:/Users/Dan/Downloads/pixel-slave-2020-12-15_114542/pixel-slave-2020-12-15_114542/app/commandhandler.js`)(Client);

  });
  
Client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === "Pixel's Broskis");
  
  guildMember.roles.add(welcomeRole);
  
  guildMember.guild.channels.cache.get('705645052361179188').send(`Welcome to the server, <@${guildMember.user.id}>. Make sure to read <#702021366617997418>`)

//#traffic channel id 705645052361179188
//#information channel id 702021366617997418
  
});
  


Client.on("message", Message => {
  if (Message.channel.type === "dm") return;
  let Prefix = "$";
  let Args = Message.content
    .slice(Prefix.length)
    .trim()
    .split(/ +/g);
  let Command = Args.shift().toLowerCase();

  if (Message.content.startsWith(Prefix)) {
    let CommandFile =
      Client.commands.get(Command) ||
      Client.commands.get(Client.aliases.get(Command));

    if (CommandFile) {
      CommandFile.run(Client, Message, Args);
    }
  } else {
  }
});

Client.on("guildMemberAdd", member => {
  member.send("Welcome to Pixel HQ!");
});

Client.login(token);
