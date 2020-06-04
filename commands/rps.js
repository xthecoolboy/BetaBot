const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    var choice = args[0];
    if (choice == "paper" || choice == "p") {
        var numb = Math.floor(Math.random() * 100);
        if (numb <= 50) {
        var choice2 = "paper";
        } else if (numb > 50) {
        var choice2 = "rock";
        } else {
        var choice2 = "scissors";
        }
        if (choice2 == "scissors") {
        var response = "I'm choosing **Scissors**! :v: I win!"
        } else if (choice2 == "paper") {
        var response = "I'm choosing **Paper**! :hand_splayed: It's a tie!"
        } else {
        var response = "I'm choosing **Rock**! :punch: You win!"
        }
        message.channel.send(response).then(msg => msg.delete(30000));
    } else if (choice == "rock" || choice == "r") {
        var numb = Math.floor(Math.random() * 100);
        if (numb <= 50) {
        var choice2 = "paper";
        } else if (numb > 50) {
        var choice2 = "rock";
        } else {
        var choice2 = "scissors";
        }
        if (choice2 == "paper") {
        var response = "I'm choosing **Paper**! :hand_splayed: I win!"
        } else if (choice2 == "rock") {
        var response = "I'm choosing **Rock**! :punch: It's a tie!"
        } else {
        var response = "I'm choosing **Scissors**! :v: You win!"
        }
        message.channel.send(response).then(msg => msg.delete(30000));
    } else if (choice == "scissors" || choice == "s") {
        var numb = Math.floor(Math.random() * 100);
        if (numb <= 50) {
        var choice2 = "paper";
        } else if (numb > 50) {
        var choice2 = "rock";
        } else {
        var choice2 = "scissors";
        }
        if (choice2 == "rock") {
        var response = "I'm choosing **Paper**! :hand_splayed: You win!"
        } else if (choice2 == "scissors") {
        var response = "I'm choosing **Scissors**! :v: It's a tie!"
        } else {
        var response = "I'm choosing **Rock**! :punch: I win!"
        }
        message.channel.send(response).then(msg => msg.delete(30000));
    } else {
        message.channel.send(`You need to use \`.rps\` <rock | paper | scissors>`).then(msg => msg.delete(10000));
    }
}

module.exports.help = {
    name: "rps"
}