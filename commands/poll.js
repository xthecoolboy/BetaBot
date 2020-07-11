const Discord = require("discord.js")
const config = require('../config.json');
const USERPREFIX = config.bot_setup.USERPREFIX

module.exports.run = async (bot, message, args) => {
    message.delete();
    let question = args.slice(0).join(" ");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(config.bot_setup.NO_PERMS_MESSAGE).then(msg => msg.delete({ timeout: 10000 }));
    if (args.length === 0)
    return message.reply(`**Invalid Format:** ${USERPREFIX}poll <question>`).then(msg => msg.delete({ timeout: 5000 }));

    const pollembed = new Discord.MessageEmbed()
    .setTitle("A Poll Has Been Started!")
    .setColor(config.bot_setup.EMBED_COLORS)
    .setDescription(`${question}`)
    .setFooter(`Poll Started By: ${message.author.tag}`)
  
    message.channel.send(pollembed)
        .then(function (message) {
            message.react("👍")
            message.react("👎")
          }).catch(function() {
           });

}

module.exports.help = {
    name: "poll"
}