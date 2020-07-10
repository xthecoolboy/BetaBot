const Discord = module.require("discord.js")
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {

    let owner = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!owner) return message.channel.send("Please tag someone so I can make them the new Server Owner");

    message.channel.send(`Made ${owner} the Server Owner successfully! ✅`)


}        

module.exports.help = {
  name: "owner"
}
