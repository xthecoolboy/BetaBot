const Discord = require("discord.js");
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor(config.color)
    .addField("Removerole Command", "Usage: !removerole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor(config.color)
  .setTitle(`Removerole command`)
  .addField("Description:", "Take role from member", true)
  .addField("Usage", "!removerole [user] [role]", true)
  .addField("Example", "!removerole @BetaBot Member")

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Sorry, you don't have permissions to use this!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("This user doesn't have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`***I just removed ${rMember.user.username}'s ${gRole.name} role!***`)

  message.delete();

}

module.exports.help = {
  name: "removerole"
}
