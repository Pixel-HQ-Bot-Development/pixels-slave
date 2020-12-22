const {readdirSync} = require("fs");

module.exports = Client => {
  const Load = Directory => {
    const CommandsArray = readdirSync(`C:/Users/Dan/Downloads/pixel-slave-2020-12-15_114542/pixel-slave-2020-12-15_114542/app/commands/${Directory}/`).filter(file => file.endsWith(".js"));
    
    for (let CurrentFile of CommandsArray) {
      let File = require(`C:/Users/Dan/Downloads/pixel-slave-2020-12-15_114542/pixel-slave-2020-12-15_114542/app/commands/${Directory}/${CurrentFile}`);
      Client.commands.set(File.config.name, File);
      
      if (File.config.aliases)
        File.config.aliases.forEach(Alias => Client.aliases.set(Alias, File.config.name));
    }
  };
  
  ["moderation", "utility", "fun", "del", "helpcmd", "tags", "music", "react", "testing", "blank", "modonly", 'dm'].forEach(Category => Load(Category));
  ["moderation", "utility", "fun", "del", "helpcmd", "tags", "music", "react", "testing", "blank", "modonly", 'dm'].forEach(Category => console.log(`Loaded ${Category}`))};