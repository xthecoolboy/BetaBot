const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (client, member) => {

   console.log(`${member.user.username} ; ${member.id} has left ${member.guild}!`);
   if(member.bot) return;

   let leaveChannel = member.guild.channels.find(`id`, config.LEAVE_CHANNEL); //Change leave channel in config.json
   if(!leaveChannel) return console.log(`Leave channel not set, you can change this in config.json`);


   leaveChannel.send(`${member} has left the server!`) //You can customize the leave message here.

};
