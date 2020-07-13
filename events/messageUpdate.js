const Discord = require("discord.js");
const config = require("../config.json");

module.exports = (client, oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    
    var embed = new Discord.MessageEmbed()
        .setColor(config.bot_setup.EMBED_COLORS)
        .setTimestamp()
        .setTitle(`**Message Edited**`)
        .setDescription(`**Edited By:** ${newMessage.author.tag}\n**Channel:** ${newMessage.channel}`)
        .addField("Old Message", `${oldMessage.content}`)
        .addField("New Message", `${newMessage.content}`);

        let eventChannel = newMessage.guild.channels.cache.get(config.channel_setup.EVENT_LOGS); //Change event logs channel in config.json
        if (eventChannel) eventChannel.send(embed)

};