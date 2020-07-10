const Discord = require("discord.js")
const config = require("../config.json");
const USERPREFIX = config.bot_setup.USERPREFIX

module.exports.run = async (bot, message, args) => {
    message.delete();
         
    if (!message.guild.roles.cache.get(config.ticket_system.SUPPORT_ROLE)) return message.channel.send(`No role to create ticket. Please contact the server owner.`).then(msg => msg.delete({ timeout: 15000 }));
    
    message.guild.channels.create(`ticket-${message.author.username}`, "text").then(c => {
        moveTicket(c)
        let roleSupportRole = message.guild.roles.cache.get(config.ticket_system.SUPPORT_ROLE);
        let roleEveryone = message.guild.roles.cache.find(role => role.name === "@everyone");
        c.createOverwrite(roleSupportRole, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        });
        c.createOverwrite(roleEveryone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        });
        c.createOverwrite(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        });
        c.setTopic(`Ticket ID: ${message.author.id} | Creator: ${message.author.username}`)
        message.channel.send(`:white_check_mark: ***<@${message.author.id}> Your ticket has been created, <#${c.id}>.***`).then(msg => msg.delete({ timeout: 15000 }));
        const embed = new Discord.MessageEmbed()
            .setColor(config.bot_setup.EMBED_COLORS)
            .setDescription(`**Dear <@${message.author.id}>!**\n\nThank you for reaching out to our support team! \n\n We will get back to you as soon as possible.\n To close this ticket use \`${USERPREFIX}close\`.`)
            .setTimestamp()
        c.send(embed)

    }).catch(console.error);
    async function moveTicket(c) {
        await c.setParent(config.ticket_system.TICKET_CATEGORY);
    };
}

module.exports.help = {
    name: "new"
}