const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (user, member) => {

   console.log(`${member.user.username} ; ${member.id} has joined ${member.guild}!`);
   if(member.bot) return;

   let welcomeChannel = member.guild.channels.cache.get(config.channel_setup.WELCOME_CHANNEL); //Change welcome channel in config.jsonv
   if (welcomeChannel) welcomeChannel.send(`${member} Welcome to ${member.guild}!`) //You can customize the welcome message here.

  // Member count channel update
  if(config["bot_setup"].ENABLE_MEMBER_COUNT) {
    member.guild.channels.cache.get(config["channel_setup"].MEMBER_COUNT_CHANNEL).setName(`Member Count: ${member.guild.memberCount}`).catch(error => console.log(error));
  }

  if(config["bot_setup"].ENABLE_JOIN_ROLE) {
    var role = member.guild.roles.cache.get(config.bot_setup.JOIN_ROLE);
    if (!role) return console.log("[!] Role not found (Config: 'JOIN_ROLE')");
    member.roles.add(role);
}

};
