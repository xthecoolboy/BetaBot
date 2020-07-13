const Discord = require("discord.js");
const config = require("../config.json");

module.exports = (client, message) => {
    if (message.author.bot) return

    if (message.content.length > 1900) {var text = "*Content truncated due to length* - " + message.content.substr(0,1900)} else {var text = message.content};
    var embed = new Discord.MessageEmbed()
        .setColor(config.bot_setup.EMBED_COLORS)
        .setTimestamp()
        .setTitle(`**Message Deleted**`)
        .setDescription(`**Nickname:** ${message.member.displayName}\n**Tag:** ${message.author.tag}\n**From Channel:** ${message.channel}\n**Content:** ${text}`);
        
        let eventChannel = message.guild.channels.cache.get(config.channel_setup.EVENT_LOGS); //Change event logs channel in config.json
        if (eventChannel) eventChannel.send(embed)
};