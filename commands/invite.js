const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](http://bit.ly/OdarBot)")
 .setColor("#fc9003")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "http://bit.ly/OdarBot")

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }
