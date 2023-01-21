const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresense = async () => {
    const option = Math.floor(Math.random() * options.length);
    const options = [
      {
        type: ActivityType.Watching,
        text: "your crystals",
        status: "online",
      },
    ];
    client.user.setPresense({
      acivities: [
        {
          name: options[option].text,
          type: options[option].type,
        },
      ],
      status: options[option].status,
    });
  };
};
