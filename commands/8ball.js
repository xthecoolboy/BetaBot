 const Discord = require("discord.js")
 const config = require('../config.json');
 
 module.exports.run = async (bot, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Please enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "I don't know", "Ask again later!", "Cyka", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", "hmmmm, no" ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor(config.bot_setup.EMBED_COLORS)
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setFooter("© 2020 BetaBot");

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.help = {
        name: "8ball"
    }
