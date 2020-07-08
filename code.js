const { Client, Collection } = require('discord.js');
const { readdir } = require('fs');
const { BOT_TOKEN, USERPREFIX } = require('./config.json');
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

// Coming soon..

  //client.on('message', message => {
  	//if (message.author.bot) return
        //if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
      //message.delete()
      //message.author.send(`I have deleted your message from ${message.channel}, if you believe this is in error please contact staff.`).catch(console.error);
    //}})

  user.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.reply("Hey! how are you?")

        let prefix = USERPREFIX;

    if(!message.content.startsWith(prefix)) return; 

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    let commandfile = user.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(user, message, args)

  });

  console.log(`\x1b[42mINFO\x1b[40m \x1b[32mSuccesfully Started BetaBot!\x1b[37m`)

  user.login(BOT_TOKEN)