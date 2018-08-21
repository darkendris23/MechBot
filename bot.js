const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BNDc5MjEyMzA2MjQxNDIxMzE1.Dl0uag.Pt9Ey22IITm3HpIrqsx4JVxwt2I);//where BOT_TOKEN is the token of our bot 
