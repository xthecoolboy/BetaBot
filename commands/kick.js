const Discord = require("discord.js")
const config = require('../config.json');
const fs = require('fs');
const USERPREFIX = config.bot_setup.USERPREFIX

module.exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(config.bot_setup.NO_PERMS_MESSAGE);
    
  let xdemb = new Discord.MessageEmbed()
  .setColor(config.bot_setup.EMBED_COLORS)
  .setTitle("Kick Command")
  .addField("Description:", "Kick a member", true)
  .addField("Usage:", `${USERPREFIX}kick [user] [reason]`, true)
  .addField("Example:", `${USERPREFIX}kick @BetaBot spam`, true)

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)

    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send("Please provide a reason to kick this user!")

    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");

      const logEmbed = new Discord.MessageEmbed()
      .setAuthor(`User Kicked`)
      .setColor(config.bot_setup.EMBED_COLORS)
      .addField("Executor", `<@${message.author.id}>`)
      .addField("User banned", `${member}`)
      .addField("Reason", `${reason}`)
      .addField("Channel", `${message.channel}`)
      .setFooter("© 2020 BetaBot");
      let logsChannel = message.guild.channels.cache.get(config.channel_setup.LOGS_CHANNEL);
    
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

      let kick = new Discord.MessageEmbed()
      .setColor(config.bot_setup.EMBED_COLORS)
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", reason)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick).then(msg => msg.delete({ timeout: 5000 }));
      if (logsChannel) return logsChannel.send(logEmbed)
      fs.appendFile('./data/punishmentlogs.txt', `[${new Date().toISOString()}] [G: ${message.guild.name} (${message.guild.id})] [C: ${message.channel.name} (${message.channel.id})] [A: ${message.author.tag} (${message.author.id})] [T: ${member.user.tag} (${member.id})] [TYPE: Kick] ${reason}\n`, function (err) {
        if (err) throw err;
      });
      console.log(`${member.user.tag} was kicked by ${message.author}`);

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }
