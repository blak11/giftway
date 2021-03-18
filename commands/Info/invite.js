const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args, lang) => {
    let websiteURL = `http://managegift.ga`;
    let inviteLink = `https://discord.com/api/oauth2/authorize?client_id=820248919836983307&permissions=8&scope=bot`;
    let voteURL = ``;
    let supportURL = client.config.support
    if (args[0] == "copy")return message.channel.send(inviteLink);

    message.channel.send(new MessageEmbed()
        .setAuthor(lang.invite.main)
        .setDescription(lang.invite.disc)
        .addField(lang.invite.inv, (`[Click Here](${inviteLink})`))
        .addField(lang.invite.vote, (``))
        .addField(lang.invite.sup, (`[Click Here](${supportURL})`))
        .setColor("RED"))
        

}
