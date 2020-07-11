const Discord = require("discord.js")
const config = require('../config.json');
const USERPREFIX = config.bot_setup.USERPREFIX

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(config.bot_setup.NO_PERMS_MESSAGE);
 
 const noAmount = new Discord.MessageEmbed()
    .setColor(config.bot_setup.EMBED_COLORS)
    .setTitle("🚫 Please specify an amount of messages to clear")
    .setDescription(`Usage - ${USERPREFIX}purge <amount>`)
    .setFooter(`Due to limitations by Discord, this must be below 100 and newer than 2 weeks`)
 const deleteCount = parseInt(args[0], 10);

 const logEmbed = new Discord.MessageEmbed()
    .setAuthor(`Channel Purged`)
    .setColor(config.bot_setup.EMBED_COLORS)
    .addField("Executor", `<@${message.author.id}>`)
    .addField("Deleted", `${deleteCount}`)
    .addField("Channel", `${message.channel}`)
    .setFooter("© 2020 BetaBot");
    //let logsChannel = message.guild.channels.find(channel => channel.name === config.LOGS_CHANNEL);
    let logsChannel = message.guild.channels.cache.get(config.channel_setup.LOGS_CHANNEL);
	{
		if (args[0])
		{
            try {
                await message.channel.bulkDelete(args[0])
                message.channel.send(`Cleared ${args[0]} messages ✅`).then(msg => msg.delete({ timeout: 2000 }));
                if (logsChannel) return logsChannel.send(logEmbed)
                message.delete().catch();
            } catch(error) {
                message.channel.send(message.author + ", You can't delete messages older than 2 weeks!")
            }

		}
		else
		{
			message.channel.send(noAmount)
		}
	}
};

module.exports.help = {
	name: "purge"
}