const Discord = require("discord.js")
const config = require('./config.json');
module.exports.run = async (bot, message, args) => {
  

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
    
  let xdemb = new Discord.RichEmbed()
  .setColor(config.color)
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField("Usage:", "!kick [user] [reason]", true)
  .addField("Example:" ,"!kick @Odar spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user!");
   if(member.user.id === "291221132256870400") return message.channel.send("I can't kick my owner!")

    
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
      .setColor(config.color)
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
