const Discord = require("discord.js")
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to use this command!");
 
 const noAmount = new Discord.RichEmbed()
    .setColor(config.colors)
    .setTitle("🚫 Please specify an amount of messages to clear")
    .setDescription(`Usage - /purge <amount>`)
    .setFooter(`Due to limitations by Discord, this must be below 100`)
 const deleteCount = parseInt(args[0], 10);

 const logEmbed = new Discord.RichEmbed()
    .setAuthor(`Channel Purged`)
    .setColor(config.colors)
    .addField("Executor", `<@${message.author.id}>`)
    .addField("Deleted", `${deleteCount}`)
    .addField("Channel", `${message.channel}`)
    let logsChannel = message.guild.channels.find(channel => channel.name === logs.config);
	{
		if (args[0])
		{
            try {
                await message.channel.bulkDelete(args[0])
                message.channel.send(`Cleared ${args[0]} messages ✅`).then(msg => msg.delete(2000))
                logsChannel.send(logEmbed)
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