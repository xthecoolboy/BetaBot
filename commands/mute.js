const Discord = require("discord.js");
const ms = require("ms");
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

  await tomute.roles.add(muterole).catch(error => console.log(error));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.roles.remove(muterole).catch(error => console.log(error));
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}
