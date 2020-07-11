const { Client, Collection } = require('discord.js');
const { readdir } = require('fs');
const Discord = require('discord.js')
const config = require("./config.json")
const fs = require('fs');
const bot = new Discord.Client({disableEveryone: true});
    const user = new Client();
    user.commands = new Collection();

readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    jsfiles.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      user.commands.set(props.help.name, props);
    });
  });

readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if(!file.endsWith('.js')) return;
      const evt = require(`./events/${file}`);
      let evtName = file.split('.')[0];
      user.on(evtName, evt.bind(null, user));
    });
  });

//Filter System
  if(config.module_toggles.ENABLE_FILTER_WORDS)
  user.on('message', message => {
  	if (message.author.bot) return
        if(config.bot_setup.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
      message.delete()
    }})

  user.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.reply("Hey! how are you?")

        let prefix = config.bot_setup.USERPREFIX;

    if (!config.bot_setup.CHAT_LOGS_BLACKLIST.includes(message.channel.name)) fs.appendFile('./data/chatlogs.txt', `[${new Date().toISOString()}] [G: ${message.guild.name} (${message.guild.id})] [C: ${message.channel.name} (${message.channel.id})] [A: ${message.author.tag} (${message.author.id})] ${message.content}\n`, function (err) {
      if (err) throw err;

    if(!message.content.startsWith(prefix)) return; 

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    let commandfile = user.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(user, message, args)
    });

  });

  user.login(config.bot_setup.BOT_TOKEN)