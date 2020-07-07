const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (user, member) => {

   console.log(`${member.user.username} ; ${member.id} has joined ${member.guild}!`);
   if(member.bot) return;

   let welcomeChannel = member.guild.channels.find(`id`, config.WELCOME_CHANNEL); //Change welcome channel in config.jsonv
   if(!welcomeChannel) return console.log(`Leave channel not set, you can change this in config.json`);

   welcomeChannel.send(`${member} Welcome to ${member.guild}!`) //You can customize the welcome message here.

};
