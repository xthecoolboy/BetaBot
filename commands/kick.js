const Discord = require("discord.js")
const config = require('../config.json');
const USERPREFIX = config["bot_setup"].USERPREFIX

module.exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(config["bot_setup"].NO_PERMS_MESSAGE);
    
  let xdemb = new Discord.RichEmbed()
  .setColor(config["bot_setup"].EMBED_COLORS)
  .setTitle("Kick Command")
  .addField("Description:", "Kick a member", true)
  .addField("Usage:", `${USERPREFIX}kick [user] [reason]`, true)
  .addField("Example:", `${USERPREFIX}kick @BetaBot spam`, true)

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");

    
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send("Please provide a reason to kick this user!")
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

      let kick = new Discord.RichEmbed()
      .setColor(config["bot_setup"].EMBED_COLORS)
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", reason)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)
      console.log(`${member.user.tag} was kicked by ${message.author}`);

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }
