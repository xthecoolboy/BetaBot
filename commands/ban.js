const Discord = require("discord.js")
const config = require('../config.json');
const { USERPREFIX } = require('../config.json');
//ban command

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(config.NO_PERMS_MESSAGE);

        const xdemb = new Discord.RichEmbed()
        .setColor(config.COLOR)
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `${USERPREFIX}ban [user] [reason]`, true)
        .addField("Example:", `${USERPREFIX}ban @BetaBot spam`)

        let member = message.mentions.members.first()
        let reason = args.slice(1).join(" ");

        if(!reason) {
          res = "No reason given";
      } else {
          res = reason
      }

        const logEmbed = new Discord.RichEmbed()
        .setAuthor(`User Banned`)
        .setColor(config.COLOR)
        .addField("Executor", `<@${message.author.id}>`)
        .addField("User banned", `${member}`)
        .addField("Channel", `${message.channel}`)
        //.addField("Reason", `${reason}`)

        let logsChannel = message.guild.channels.find(channel => channel.name === config.LOGS_CHANNEL);

        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("I can't ban this user!")

        if(member.id === message.author.id) return message.channel.send("You can't ban yourself")

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I couldn't ban because of: ${error}`));

        const chatlog = new Discord.RichEmbed()
        .setColor(config.COLOR)
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", reason)
        .setTimestamp()

        message.channel.send(chatlog)
        logsChannel.send(logEmbed)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }
