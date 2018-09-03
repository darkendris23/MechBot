//Load Constants
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = "m!";

client.on("ready", () => {
  console.log("I am ready!");
});
//=====================================================================================================================================================================================================
//commands
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //Server shop
  if (message.content.startsWith(prefix + "servershop")) {
    const embed = new Discord.RichEmbed()
  .setAuthor("Welcome to Server Shop", "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/shop-icon.png")
  .setColor(0x00AE86)
  .setDescription("[1] - Emblems \n[2] -Icons \n[3] - Gif's \n[4] - Emotes \n[5] - Ranks \n[6] - Info Card Back Grounds \n reply with (🗙) to cancel")
  message.reply({embed})
  .then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  //if Emblems
  .then((collected) => {
    const embed = new Discord.RichEmbed()
  .setAuthor("Server Shop: Emblems", "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/shop-icon.png")
  .setColor(0x00AE86)
  .setDescription("[1] - Emblems \n[2] -Icons \n[3] - Gif's \n[4] - Emotes \n[5] - Ranks \n[6] - Info Card Back Grounds \n reply with (🗙) to cancel")
      message.reply({embed});
    })
});
}
});
//=====================================================================================================================================================================================================
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


client.login(config.token);
