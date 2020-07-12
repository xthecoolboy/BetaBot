const Discord = require('discord.js');
const config = require('../config.json');

module.exports = (user, member) => {
  if(member.bot) return;

  let JoinMessageVariable_User = config.bot_setup.WELCOME_MESSAGE.replace(/{user}/g, `${member}`).replace(/{guild}/g, `${member.guild}`);
  let logsChannel = member.guild.channels.cache.get(config.channel_setup.LOGS_CHANNEL);

  const altlogembed = new Discord.MessageEmbed()
  .setAuthor(`⚠️ Possible Alt Account! ⚠️`)
  .setColor(config.bot_setup.EMBED_COLORS)
  .addField("User banned", `${member}`)
  .addField("Reason", `Possible Alt Account`)
  .addField("Account Created on", `${member.user.createdAt}`)
  .setFooter("© 2020 BetaBot");

   console.log(`${member.user.username} ; ${member.id} has joined ${member.guild}!`);

  // Anti alt system, more coming soon
   if(config.module_toggles.ENABLE_ANTI_ALTS) {
    if (Date.now() - member.user.createdAt < 500*60*60*24*10)
    member.ban({ reason: 'Possible Alt Account' })
    console.log(`[!] ${member.user.username} was automatically banned for "Possible Alt Account"`)
    if (logsChannel) logsChannel.send(altlogembed)
   }

  // Welcome messages
   if(config.module_toggles.ENABLE_WELCOME_MESSAGES) {
   let welcomeChannel = member.guild.channels.cache.get(config.channel_setup.WELCOME_CHANNEL); //Change welcome channel in config.json
   if (welcomeChannel) welcomeChannel.send(JoinMessageVariable_User)
 }

  // Member count channel update
  if(config.module_toggles.ENABLE_MEMBER_COUNT) {
    let memberCountChannel = member.guild.channels.cache.get(config.channel_setup.MEMBER_COUNT_CHANNEL)
    if (memberCountChannel) memberCountChannel.setName(`Member Count: ${member.guild.memberCount}`).catch(error => console.log(error));
  }

 // Join role
  if(config.module_toggles.ENABLE_JOIN_ROLE) {
    var role = member.guild.roles.cache.get(config.bot_setup.JOIN_ROLE);
    if (!role) return console.log("[!] Join role not found (Config: 'JOIN_ROLE')");
    member.roles.add(role);
}

};
