const Discord = require("discord.js")
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.delete();
    let question = args.slice(0).join(" ");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    if (args.length === 0)
    return message.reply('**Invalid Format:** `!poll <question>`')

    const pollembed = new Discord.RichEmbed()
    .setTitle("A Poll Has Been Started!")
    .setColor(config.COLOR)
    .setDescription(`${question}`)
    .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)
  
    message.channel.send({pollembed}).then( (message) => {
        message.react('👍')
        .then(() => message.react('👎'))
    });

}

module.exports.help = {
    name: "poll"
}