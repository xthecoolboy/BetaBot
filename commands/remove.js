const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You're not in a ticket channel.`).then(msg => msg.delete({ timeout: 5000 }));
    let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!aUser) return message.channel.send("Please specify a user to remove!").then(msg => msg.delete({ timeout: 5000 }));

    if(aUser.roles.cache.get(config.ticket_system.SUPPORT_ROLE)) return message.channel.send(`Invalid permissions.`).then(msg => msg.delete({ timeout: 5000 }));
    message.channel.createOverwrite(aUser, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false,
        READ_MESSAGE_HISTORY: false
    });

    const embed = new Discord.MessageEmbed()
    .setColor(config.bot_setup.EMBED_COLORS)
    .setDescription(`Removed **${aUser} (${aUser.user.tag})** from the ticket.`)

    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }));
}

module.exports.help = {
    name: "remove"
}