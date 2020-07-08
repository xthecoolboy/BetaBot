const Discord = require("discord.js");
const config = require("../config.json");

module.exports = (client, message) => {
    if (message.author.bot) return

    var guild = message.guild.id;
    var delLogChannel = config.EVENT_LOGS;
    if(!eventLogChannel) return console.log(`Event logs channel not set, You can change this in config.json`);

    if (message.content.length > 1900) {var text = "*Content truncated due to length* - " + message.content.substr(0,1900)} else {var text = message.content};
    var embed = new Discord.RichEmbed()
        .setColor(config.COLOR)
        .setTimestamp()
        .setTitle(`**Message Deleted**`)
        .setDescription(`**Nickname:** ${message.member.displayName}\n**Tag:** ${message.author.tag}\n**From Channel:** ${message.channel}\n**Content:** ${text}`);
    client.guilds.find("id",guild).channels.find("id", delLogChannel).send({embed}).catch(console.error);
};