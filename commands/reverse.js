const { Message } = require("discord.js");

exports.run = function (bot, msg, args) {
    if (args.length < 1) return msg.channel.send("Please input a text to reverse!")
    msg.reply(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
  name: "reverse"
}
