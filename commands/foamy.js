const Discord = require("discord.js");
const config = require('./config.json');

module.exports.run = async (bot, message, args) => {

    message.channel.send({  
        embed: {
          title: "FOAMY IS ON TOP!",
          description: "Foamy Info",
          color: config.color,
          fields: [
            {
              name: "Who is Foamy??",
              value: "Foamy is pidor",
              inline:false
            },
            {
              name: "Steam",
              value: "[Steam Profile](http://steamcommunity.com/profiles/76561198142354451)",
              inline: true
            },
            {
              name: "Steam Group",
              value: "[CS:GOUnicorns](https://steamcommunity.com/groups/UnicornDab)",
              inline: true
            },
            {
              name: "Twitter",
              value: "[Twitter](https://twitter.com/Karapetsas_Dim)",
              inline: true
            },
            {
              name: "Twitch",
              value: "[foamy23](https://www.twitch.tv/foamy23)",
              inline: true
            },
            {
              name: "SoundCloud",
              value: "[Yungfoamy](https://soundcloud.com/foamy-624057168)",
              inline: true
            },
            {
              name: "Discord",
              value: "[Foamy's Freaks](https://discord.gg/nfMQfTA)",
              inline: true
            }
          ]
        }
    })

    message.delete();
}
  module.exports.help = {
    name: "foamy"
  }
