const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.MessageEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(config.bot_setup.EMBED_COLORS)
        message.channel.send(wEmbed).then(msg => msg.delete({ timeout: 10000 }));
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(config.bot_setup.EMBED_COLORS)
        message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }));
    }
}

module.exports.help = {
    name: "slots"
}