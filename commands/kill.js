const Discord = require("discord.js")
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {

let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.MessageEmbed()
.setColor(config.bot_setup.EMBED_COLORS)
.setDescription(`${message.author} decied to kill themself 💔 REST IN PEACE`)

message.channel.send(emb)

} else {

let emb = new Discord.MessageEmbed()
.setColor(config.bot_setup.EMBED_COLORS)
.setDescription(`${killed} was killed by ${message.author} 💔 REST IN PEACE`)

message.channel.send(emb)


}

}
module.exports.help = {
  name: "kill"
}
