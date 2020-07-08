const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    return message.channel.send(`You can find BetaBot on github! https://github.com/Swqppingg/BetaBot`);
}

module.exports.help = {
    name: "github"
}