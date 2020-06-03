const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, you don't have permissions to use this!");


    const logEmbed = new Discord.RichEmbed()
    .setAuthor(`User Unmuted`)
    .setColor(config.COLOR)
    .addField("Executor", `<@${message.author.id}>`)
    .addField("User Unmuted", `${message.mentions.users.first}`)
    .addField("Channel", `${message.channel}`)
    let logsChannel = message.guild.channels.find(channel => channel.name === config.LOGS_CHANNEL);

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Please mention an user or ID to mute!");

        let role = message.guild.roles.find(r => r.name === config.MUTED_ROLE) //Change "Muted" to your muted role name
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This user is not muted!");

        await toMute.removeRole(role);
        message.channel.sendMessage("The user has been unmuted!");
        logsChannel.send(logEmbed)

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }