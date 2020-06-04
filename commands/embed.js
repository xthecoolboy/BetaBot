const Discord = require("discord.js")
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(config.NO_PERMS_MESSAGE);

  const cmd = args.join(' ').split(' | ')

  let emb = new Discord.RichEmbed()
  .setTitle(cmd[0])
  .setColor(cmd[1])
  .setDescription(cmd[2])
  .setTimestamp()

  message.channel.send(emb)
  
  message.delete();

    }
    module.exports.help = {
        name: "embed"
      }
