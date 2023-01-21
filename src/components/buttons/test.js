const { execute } = require("../../events/client/ready");

module.exports = {
    data: {
        name: `btnTest`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle(`embed title`)
        .setDescription(`description`)
        .setColor(0x62b8f3)
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            url: `https://ko-fi.com/Vendron`,
            iconUrl: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        .setURL(`https://ko-fi.com/Vendron`)
        .setFields([
            {
                name: `Woah`,
                value: `First field`,
                inline: true
            },
            {
                name: `Wowie`,
                value: `Second field`,
                inline: true
            }
        ]);
        await interaction.reply({
            embeds: [embed]
        });
    },
};