const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (user, member) => {

   console.log(`${member.user.username} ; ${member.id} has joined ${member.guild}!`);
   if(member.bot) return;

   let welcomeChannel = member.guild.channels.find(`id`, config["channel_setup"].LEAVE_CHANNEL); //Change welcome channel in config.jsonv
   if(!welcomeChannel) return console.log(`Welcome channel not set, you can change this in config.json (Member count will not update if you haven't set a welcome channel)`);

   welcomeChannel.send(`${member} Welcome to ${member.guild}!`) //You can customize the welcome message here.

  // Member count channel update
  if(config["bot_setup"].ENABLE_MEMBER_COUNT) {
   member.guild.channels.find(channel => channel.id === config["channel_setup"].MEMBER_COUNT_CHANNEL).setName(`Member Count: ${member.guild.memberCount}`).catch(error => console.log(error));
  }

};
