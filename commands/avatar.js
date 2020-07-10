const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;
    let avatarurl = mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

        let embed = new Discord.MessageEmbed()

        .setImage(avatarurl)
        .setColor(config.bot_setup.EMBED_COLORS)
        .setTitle("Avatar")
        .setFooter("Searched by " + message.author.tag)
        .setDescription(avatarurl);

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}
