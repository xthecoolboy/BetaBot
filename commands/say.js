module.exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(config.NO_PERMS_MESSAGE);
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say"
}
