const Discord = require("discord.js")
const config = require('../config.json');
const { USERPREFIX } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(config.NO_PERMS_MESSAGE);
    
  let xdemb = new Discord.RichEmbed()
  .setColor(config.COLOR)
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField(`Usage:", ${USERPREFIX}kick [user] [reason]`, true)
  .addField(`Example:", ${USERPREFIX}kick @BetaBot spam`)

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");

    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "No reason given";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

      let kick = new Discord.RichEmbed()
      .setColor(config.COLOR)
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", res)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }
