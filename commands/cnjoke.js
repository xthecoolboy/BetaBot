const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    giveMeAJoke.getRandomCNJoke(function(joke){
        message.channel.send(joke)
    })
}

module.exports.help = {
    name: "cnjoke"
}