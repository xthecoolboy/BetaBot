const Discord = require("discord.js")
const config = require('../config.json');
 
module.exports.run = async (bot, message, args) => {

const USERPREFIX = config.bot_setup.USERPREFIX

const helpembed = new Discord.MessageEmbed()
.setTitle(`BetaBot's Prefix is: ${USERPREFIX}`)
.setAuthor("BetaBot Help")
.setDescription(`   


__**General**__
${USERPREFIX}8ball
${USERPREFIX}avatar
${USERPREFIX}botinfo
${USERPREFIX}cat
${USERPREFIX}clap
${USERPREFIX}cow
${USERPREFIX}dog
${USERPREFIX}finduser
${USERPREFIX}flip
${USERPREFIX}gif
${USERPREFIX}hastebin
${USERPREFIX}icon
${USERPREFIX}id
${USERPREFIX}kill
${USERPREFIX}lenny
${USERPREFIX}megusta
${USERPREFIX}mock
${USERPREFIX}morse
${USERPREFIX}owner
${USERPREFIX}pepe
${USERPREFIX}ping
${USERPREFIX}poll
${USERPREFIX}rate
${USERPREFIX}reverse
${USERPREFIX}roleinfo
${USERPREFIX}rps
${USERPREFIX}serverinfo
${USERPREFIX}shrug
${USERPREFIX}slots
${USERPREFIX}stats
${USERPREFIX}timer
${USERPREFIX}translate
${USERPREFIX}unicode
${USERPREFIX}userinfo
${USERPREFIX}weather
${USERPREFIX}yomama
${USERPREFIX}github

__**Ticket System**__
${USERPREFIX}new
${USERPREFIX}close
${USERPREFIX}add
${USERPREFIX}remove

__**Administration/Moderation**__
${USERPREFIX}ban
${USERPREFIX}kick
${USERPREFIX}warn
${USERPREFIX}purge
${USERPREFIX}setstatus

`)
.setColor(config.bot_setup.EMBED_COLORS)
.setFooter("© 2020 BetaBot");

message.channel.send(helpembed).then(msg => msg.delete({ timeout: 15000 }));
message.delete().catch();

}
module.exports.help = {
  name: "help"
}