const { RichEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = (client) => {

    console.log(`\x1b[42mINFO\x1b[40m \x1b[32mSuccesfully Started BetaBot! \n\x1b[32m- Running on ${client.guilds.cache.size} servers\x1b[37m\n\x1b[32m- ${client.users.cache.size} Total users`)
    client.user.setActivity(`${client.users.cache.size} users`,{'type':'WATCHING'});
};
