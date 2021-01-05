const Discord = require("discord.js");
const Client = new Discord.Client();
const Sequelize = require('sequelize');
var token = ('no')
let Prefix = "$";
const ytdl = require("ytdl-core");
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});
const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});
const queue = new Map();

Client.once("ready", () => {
  console.log("Ready!");
});

Client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

Client.once("disconnect", () => {
  console.log("Disconnect!");
});

Client.on("message", async Message => {
  if (Message.author.bot) return;
  if (!Message.content.startsWith(Prefix)) return;

  const serverQueue = queue.get(Message.guild.id);

  if (Message.content.startsWith(`${Prefix}play`)) {
    execute(Message, serverQueue);
    return;
  } else if (Message.content.startsWith(`${Prefix}skip`)) {
    skip(Message, serverQueue);
    return;
  } else if (Message.content.startsWith(`${Prefix}stop`)) {
    stop(Message, serverQueue);
    return;
  } else if (Message.content.startsWith(`${Prefix}queue`))
    Message.channel.send(serverQueue)
});

async function execute(Message, serverQueue) {
  const args = Message.content.split(" ");

  const voiceChannel = Message.member.voice.channel;
  if (!voiceChannel)
    return Message.channel.send(
      "You need to be in a voice channel to play music!"
    );
    const permissions = voiceChannel.permissionsFor(Message.client.user)
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return Message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: Message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(Message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(Message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(Message.guild.id);
      return Message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return Message.channel.send(`${song.title} has been added to the queue!`);
  }
  console.log(song.title + " was added to " + Message.guild.id + ("'s queue"))
}

function skip(Message, serverQueue) {
  if (!Message.member.voice.channel)
    return Message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return Message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(Message, serverQueue) {
  if (!Message.member.voice.channel)
    return Message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
    
  if (!serverQueue)
    return Message.channel.send("There is no song that I could stop!");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}

Client.on("ready", () => {
  console.log("I'm online!\n");
  console.log("Logged in as Pixel's Slave#3334");
  console.log("Node version: " + process.version + "\nDiscord.js version: " + Discord.version)
  console.log("Loading each")
  console.log("Tags synced")


  Client.aliases = new Discord.Collection();
  Client.commands = new Discord.Collection();
  require(`C:/Users/Dan/Downloads/pixel-slave-2020-12-15_114542/pixel-slave-2020-12-15_114542/app/commandhandler.js`)(Client);
  console.log("Boot completed successfully")
  });


Client.on("message", Message => {
  if (Message.channel.type === "dm") return;
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


Client.on('message', async Message => {
	if (Message.content.startsWith(Prefix)) {
		const input = Message.content.slice(Prefix.length).trim().split(' ');
		const command = input.shift();
		const commandArgs = input.join(' ');
    
		if (command === 'addtag') {
			if (Message.author.id !== "364902391717298181" && Message.author.id !== "508036593123196950") {
				return Message.reply("You do not have the sufficient permissions")
			}
			const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');

			try {
				const tag = await Tags.create({
					name: tagName,
					description: tagDescription,
					username: Message.author.username,
				});
        return Message.reply(`Tag ${tag.name} added.`)
			} catch (e) {
				if (e.name === 'SequelizeUniqueConstraintError') {
					return Message.reply('That tag already exists.');
				}
				return Message.reply('Something went wrong with adding a tag.');
			}
		} else if (command === 'tag') {
            const tagName = commandArgs;
            
			const tag = await Tags.findOne({ where: { name: tagName } });
			if (tag) {
				tag.increment('usage_count');
				return Message.reply(tag.get('description'));
			}
			return Message.reply(`Could not find tag: ${tagName}`);
		} else if (command === 'edittag') {
			if (Message.author.id !== "364902391717298181" && Message.author.id !== "508036593123196950") {
				return Message.reply("You do not have the sufficient permissions")
			}
			const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');

			const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
			if (affectedRows > 0) {
				return Message.reply(`Tag ${tagName} was edited.`);
			}
			return Message.reply(`Could not find a tag with name ${tagName}.`);
		} else if (command === 'taginfo') {
			const tagName = commandArgs;

			const tag = await Tags.findOne({ where: { name: tagName } });
			if (tag) {
				return Message.channel.send(`Tag **"${tagName}"** was created by **${tag.username}** at **${tag.createdAt}** and has been used **${tag.usage_count}** times.`);
			}
			return Message.reply(`Could not find tag: ${tagName}`);
		} else if (command === 'tags') {
			const tagList = await Tags.findAll({ attributes: ['name'] });
			const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
			return Message.channel.send(`List of tags: ${tagString}`);
		} else if (command === 'deltag') {
			if (Message.author.id !== "364902391717298181" && Message.author.id !== "508036593123196950") {
				return Message.reply("You do not have the sufficient permissions")
			}
			const tagName = commandArgs;
			const rowCount = await Tags.destroy({ where: { name: tagName } });
			if (!rowCount) return Message.reply('That tag did not exist.');

			return Message.reply('Tag deleted.');
		}
	}
});


Client.login(token);
