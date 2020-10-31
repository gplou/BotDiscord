const Discord = require('discord.js');
const client = new Discord.Client();
const tokensDiscord = require('./secrets/tokens.json').tokenDiscord;
const covid = require('./controllers/covid');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.startsWith('!')) {
        if (msg.content.includes('!covid')) {
            covid.handleMessage(msg); 
        }
    }
});

client.login(tokensDiscord);
