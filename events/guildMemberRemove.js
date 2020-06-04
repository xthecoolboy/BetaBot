const { RichEmbed } = require('discord.js');

module.exports = (client, member) => {

   console.log(`${member.user.username} ; ${member.id} has left ${member.guild}!`);
   if(member.bot) return;

   let leaveChannel = member.guild.channels.find(`id`, config.LEAVE_CHANNEL); //Change leave channel in config.json

   leaveChannel.send(`${member} has left the server!`) //You can customize the leave message here.

};
