const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (client, member) => {

   let JoinMessageVariable_User = config.bot_setup.LEAVE_MESSAGE.replace(/{user}/g, `${member}`).replace(/{guild}/g, `${member.guild}`);

   console.log(`${member.user.username} ; ${member.id} has left ${member.guild}!`);
   if(member.bot) return;

   if(config.module_toggles.ENABLE_LEAVE_MESSAGES) {
   let leaveChannel = member.guild.channels.cache.get(config.channel_setup.LEAVE_CHANNEL); //Change leave channel in config.json
   if (leaveChannel) leaveChannel.send(JoinMessageVariable_User)
 }

  // Member count channel update
  if(config.module_toggles.ENABLE_MEMBER_COUNT) {
   member.guild.channels.cache.get(config.channel_setup.MEMBER_COUNT_CHANNEL).setName(`Member Count: ${member.guild.memberCount}`).catch(error => console.log(error));
}

};
