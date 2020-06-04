const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    let arg = message.content.split(" ").slice(1);
    let status = arg.join(' ')
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Sorry, you don't have permissions to use this!").then(msg => msg.delete(10000));
    bot.user.setActivity(status)
    message.channel.send("Changed status!").then(msg => msg.delete(10000));
}

module.exports.help = {
    name: "setstatus"
}