const Discord = require("discord.js")
const config = require('../config.json');
const USERPREFIX = config["bot_setup"].USERPREFIX
//ban command

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(config["bot_setup"].NO_PERMS_MESSAGE);

        const xdemb = new Discord.MessageEmbed()
        .setColor(config.bot_setup.EMBED_COLORS)
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `${USERPREFIX}ban [user] [reason]`, true)
        .addField("Example:", `${USERPREFIX}ban @BetaBot spam`)
        .setFooter("© 2020 BetaBot");

        let member = message.mentions.members.first()
        let reason = args.slice(1).join(" ");
       
        if(!reason) return message.channel.send("Please provide a reason to ban this user!")

        const logEmbed = new Discord.MessageEmbed()
        .setAuthor(`User Banned`)
        .setColor(config.bot_setup.EMBED_COLORS)
        .addField("Executor", `<@${message.author.id}>`)
        .addField("User banned", `${member}`)
        .addField("Channel", `${message.channel}`)
        .setFooter("© 2020 BetaBot");
        //.addField("Reason", `${reason}`)

        //let logsChannel = message.guild.channels.find(channel => channel.name === config.LOGS_CHANNEL);
        let logsChannel = message.guild.channels.find(`id`, config["channel_setup"].LOGS_CHANNEL);
        if(!logsChannel) return message.channel.send(`❌ Logs channel not set, you can change this in config.json`);

        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("I can't ban this user!")

        if(member.id === message.author.id) return message.channel.send("You can't ban yourself")

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I couldn't ban because of: ${error}`));

        const chatlog = new Discord.MessageEmbed()
        .setColor(config.bot_setup.EMBED_COLORS)
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", reason)
        .setTimestamp()

        message.channel.send(chatlog)
        logsChannel.send(logEmbed)
        console.log(`${member.user.tag} was banned by ${message.author}`);

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }
