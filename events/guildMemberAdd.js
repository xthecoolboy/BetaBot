const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (user, member) => {

  let JoinMessageVariable_User = config.bot_setup.WELCOME_MESSAGE.replace(/{user}/g, `${member}`).replace(/{guild}/g, `${member.guild}`);

   console.log(`${member.user.username} ; ${member.id} has joined ${member.guild}!`);
   if(member.bot) return;

   if(config.module_toggles.ENABLE_WELCOME_MESSAGES) {
   let welcomeChannel = member.guild.channels.cache.get(config.channel_setup.WELCOME_CHANNEL); //Change welcome channel in config.json
   if (welcomeChannel) welcomeChannel.send(JoinMessageVariable_User)
 }

  // Member count channel update
  if(config.module_toggles.ENABLE_MEMBER_COUNT) {
    member.guild.channels.cache.get(config.channel_setup.MEMBER_COUNT_CHANNEL).setName(`Member Count: ${member.guild.memberCount}`).catch(error => console.log(error));
  }

  if(config.module_toggles.ENABLE_JOIN_ROLE) {
    var role = member.guild.roles.cache.get(config.bot_setup.JOIN_ROLE);
    if (!role) return console.log("[!] Role not found (Config: 'JOIN_ROLE')");
    member.roles.add(role);
}

};
