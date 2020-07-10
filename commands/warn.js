const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json');
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(config["bot_setup"].NO_PERMS_MESSAGE);
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn.'); //First args missing message
  if (reason.length < 1) return message.reply('You must provide a reason.'); //Reason message

  const logEmbed = new Discord.MessageEmbed()
  .setAuthor(`User Warned`)
  .setColor(config.bot_setup.EMBED_COLORS)
  .addField("Executor", `${message.author.tag}`)
  .addField("Reason", `${reason}`)
  .addField("Channel", `${message.channel}`)
  .setFooter("© 2020 BetaBot");
  let logsChannel = message.guild.channels.cache.get(config.channel_setup.LOGS_CHANNEL);

  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setColor(config.bot_setup.EMBED_COLORS)
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason)
  .setFooter("© 2020 BetaBot");

  user.send(dmsEmbed);
  if (logsChannel) return logsChannel.send(logEmbed)

  message.delete();
  
  message.channel.send(`${user.tag} has been warned`) //Channel warn message

}

exports.help = {
  name: 'warn'
};
