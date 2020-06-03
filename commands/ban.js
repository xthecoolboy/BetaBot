const Discord = require("discord.js")
const config = require('../config.json');
//ban command

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.RichEmbed()
        .setColor(config.COLOR)
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `!ban [user] [reason]`, true)
        .addField("Example:", `!ban @BetaBot spam`)

        const logEmbed = new Discord.RichEmbed()
        .setAuthor(`User Banned`)
        .setColor(config.COLOR)
        .addField("Executor", `<@${message.author.id}>`)
        .addField("User banned", `${deleteCount}`)
        .addField("Channel", `${message.channel}`)
        .addField("Reason", `${res}`)
        let logsChannel = message.guild.channels.find(channel => channel.name === config.LOGS_CHANNEL);

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry you don't have permission to use this!");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("I can't ban this user!")

        if(member.id === message.author.id) return message.channel.send("You can't ban yourself")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "No reason given";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I couldn't ban because of: ${error}`));

        let bean = new Discord.RichEmbed()
        .setColor(config.COLOR)
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", res)
        .setTimestamp()

        message.channel.send(bean)
        logsChannel.send(logEmbed)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }
