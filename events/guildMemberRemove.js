const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (client, member) => {

   console.log(`${member.user.username} ; ${member.id} has left ${member.guild}!`);
   if(member.bot) return;

   let leaveChannel = member.guild.channels.cache.get(config.channel_setup.LEAVE_CHANNEL); //Change leave channel in config.json
   if (leaveChannel) leaveChannel.send(`${member} has left the server!`)


  // Member count channel update
  if(config.bot_setup.ENABLE_MEMBER_COUNT) {
   member.guild.channels.cache.get(config.channel_setup.MEMBER_COUNT_CHANNEL).setName(`Member Count: ${member.guild.memberCount}`).catch(error => console.log(error));
}

};
