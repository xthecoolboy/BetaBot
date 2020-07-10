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

    const embed = new Discord.MessageEmbed()
    .setColor(config.bot_setup.EMBED_COLORS)
    .setDescription(`Added **${aUser} (${aUser.user.tag})** to the ticket.`)

    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }));
}

module.exports.help = {
    name: "add"
}