const Discord = require("discord.js");
const config = require("../config.json");

module.exports = (client, oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    
    var guild = newMessage.guild.id;
    var editLogChannel = config.EVENT_LOGS;
    if(!editLogChannel) return console.log(`Event logs channel not set, You can change this in config.json`);
    
    var embed = new Discord.RichEmbed()
        .setColor(config.COLOR)
        .setTimestamp()
        .setTitle(`**Message Edited**`)
        .setDescription(`**Edited By:** ${newMessage.author.tag}\n**Channel:** ${newMessage.channel}`)
        .addField("Old Message", `${oldMessage.content}`)
        .addField("New Message", `${newMessage.content}`);

    client.guilds.find("id",guild).channels.find("id", editLogChannel).send({embed}).catch(console.error);

};