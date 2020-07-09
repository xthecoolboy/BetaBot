const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);

    let uptimeEmbed = new Discord.RichEmbed()
    .setDescription(`${bot.user.username} Bot Uptime`)
    .setColor(config["bot_setup"].EMBED_COLORS)
    .addField("Hours", hours)
    .addField("Minutes", minutes)
    .setTimestamp()
    
    message.channel.send(uptimeEmbed).then(msg => msg.delete(10000));
}

module.exports.help = {
    name: "uptime"
}