const Discord = require("discord.js");
const ms = require("ms");
const fs = require('fs');
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.channel.send("Please tag a user to mute!");
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(config.bot_setup.NO_PERMS_MESSAGE);
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I can't mute this user");
  if (tomute.id === message.author.id) return message.channel.send("You cannot mute yourself!");
  let muterole = message.guild.roles.cache.get(config.bot_setup.MUTED_ROLE);

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("You didn't specify a time!");

  const logEmbed = new Discord.MessageEmbed()
  .setAuthor(`User Muted`)
  .setColor(config.bot_setup.EMBED_COLORS)
  .addField("Executor", `${message.author.tag}`)
  .addField("Channel", `${message.channel}`)
  .setFooter("© 2020 BetaBot");
  let logsChannel = message.guild.channels.cache.get(config.channel_setup.LOGS_CHANNEL);

  await tomute.roles.add(muterole).catch(error => console.log(error));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
  if (logsChannel) return logsChannel.send(logEmbed)
fs.appendFile('./data/punishmentlogs.txt', `[${new Date().toISOString()}] [G: ${message.guild.name} (${message.guild.id})] [C: ${message.channel.name} (${message.channel.id})] [A: ${message.author.tag} (${message.author.id})] [T: ${tomute.user.tag} (${tomute.id})] [TYPE: Mute] \n`, function (err) {
  if (err) throw err;
  });


  setTimeout(function(){
    tomute.roles.remove(muterole).catch(error => console.log(error));
  }, ms(mutetime));

  message.delete();
  

}

module.exports.help = {
  name: "mute"
}
