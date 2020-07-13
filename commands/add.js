const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You're not in a ticket channel.`).then(msg => msg.delete({ timeout: 5000 }));
    let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!aUser) return message.channel.send("Please specify a user to add!").then(msg => msg.delete({ timeout: 5000 }));
    message.channel.createOverwrite(aUser, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true
    });

    let logsChannel = message.guild.channels.cache.get(config.channel_setup.LOGS_CHANNEL);

    const log = new Discord.MessageEmbed()
    .setColor(config.COLOR)
    .setTitle(`🗒 Ticket User Added`)
    .setDescription(`**User** - ${message.author}\n**Channel** - ${message.channel}\n**Added** - ${user}`)
    .setTimestamp(message.createdAt)

    const embed = new Discord.MessageEmbed()
    .setColor(config.bot_setup.EMBED_COLORS)
    .setDescription(`Added **${aUser} (${aUser.user.tag})** to the ticket.`)

    message.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
    if (logsChannel) return logsChannel.send(log)
}

module.exports.help = {
    name: "add"
}