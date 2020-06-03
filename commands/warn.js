const Discord = require('discord.js');
const fs = require("fs");
const config = require('./config.json');
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permissions to do that!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn.');
  if (reason.length < 1) return message.reply('You must provide a reason.');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor(config.color)
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} has been warned`)

}

exports.help = {
  name: 'warn'
};
