const Commando = require('discord.js-commando');
const request = require('request'); 
const config = require('../config.json');
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.RichEmbed()
                    .setImage(body)
                    (config["bot_setup"].EMBED_COLORS)
                    .setTitle("Here is your random cat")
                    .setFooter("© 2020 BetaBot");
                              
                   message.channel.send(emb)  
            }
        });
    }

module.exports.help = {
  name:"cat"
}
