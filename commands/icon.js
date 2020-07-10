const Discord = require("discord.js");
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("Generating icon...");
//Command not working ATM.
if(!message.guild.iconURL) return msg.edit("No icon found!");
let guildicon = message.guild.iconURL();

let iconembed = new Discord.MessageEmbed()
.setColor(config.bot_setup.EMBED_COLORS)
.setFooter("Searched by " + message.author.tag)
.setImage(guildicon)
.setTitle("Icon")
.setDescription(guildicon)

message.channel.send(iconembed)
    
    msg.delete();
 }

    module.exports.help = {
        name: "icon"
    }
