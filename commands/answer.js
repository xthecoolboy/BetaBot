const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "291221132256870400" && Owner.id !== "213588167406649346") return message.reply("Only the bot owner can use this command!")
   // ^^^^^ Replace that with your discord User ID

    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Usage `!answer ID your message`")
    

   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username)
   .setColor("#fc9003")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle("Response from your contact!")
   .addField("Response:", sayMessage)
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("#fc9003")
    .setDescription(`Message sent to <@${id}>`);

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});


        message.delete();

      }
      module.exports.help = {
        name: "answer",
        description: 'Owner Only',
        usage: 'answer <ID> <message>'
      }
