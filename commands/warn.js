const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json');
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn.');
  if (reason.length < 1) return message.reply('You must provide a reason.');

  const logEmbed = new Discord.RichEmbed()
  .setAuthor(`User Warned`)
  .setColor(config.COLOR)
  .addField("Executor", `${message.author.tag}`)
  .addField("Reason", `${reason}`)
  .addField("Channel", `${message.channel}`)
  let logsChannel = message.guild.channels.find(channel => channel.name === config.LOGS_CHANNEL);

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor(config.COLOR)
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsEmbed);
  logsChannel.send(logEmbed)

  message.delete();
  
  message.channel.send(`${user.tag} has been warned`)

}

exports.help = {
  name: 'warn'
};
