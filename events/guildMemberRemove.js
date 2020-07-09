const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (client, member) => {

   console.log(`${member.user.username} ; ${member.id} has left ${member.guild}!`);
   if(member.bot) return;

   let leaveChannel = member.guild.channels.find(`id`, config["channel_setup"].LEAVE_CHANNEL); //Change leave channel in config.json
   if(!leaveChannel) return console.log(`Leave channel not set, you can change this in config.json (Member count will not update if you haven't set a leave channel)`);


   leaveChannel.send(`${member} has left the server!`) //You can customize the leave message here.

  // Member count channel update
  if(config["bot_setup"].ENABLE_MEMBER_COUNT) {
   member.guild.channels.find(channel => channel.id === config["channel_setup"].MEMBER_COUNT_CHANNEL).setName(`Member Count: ${member.guild.memberCount}`).catch(error => console.log(error));
}

};
