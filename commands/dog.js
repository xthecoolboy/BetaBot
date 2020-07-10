const { Command } = require('discord.js-commando');
const snekfetch = require('snekfetch');
const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    const embed = new Discord.MessageEmbed()
    .setColor(config.bot_setup.EMBED_COLORS)
    .setImage(body.url);

    message.channel.send(embed)

}
module.exports.help = {
  name: "dog"
}