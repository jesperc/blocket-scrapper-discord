const Discord = require('discord.io');
const auth = require('./auth.json');
const axios = require('axios');
const parser = require('./parser');

const URL = `https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&is=1&save_search=1&l=0&md=th&f=b&ca=14&w=111`;
const READY = 'I will now fetch new apartments from blocket every 60 seconds and print them in this channel. Beep Boop.';
const INTERVAL_IN_MS = 60000;
const DISCORD_CHANNEL_ID = '385206542074642453';

// Initialize Discord Bot
const client = new Discord.Client({
    token: auth.token,
    autorun: true
});

// Bot is ready
client.on('ready', (evt) => {
    console.log(`Connected as ${client.username} - (${client.id})`);
    sendMessage(READY);
});

// Send message to Discord channel
const sendMessage = (message) => {
    client.sendMessage({
        to: DISCORD_CHANNEL_ID, 
        message: message
    });
};

// Loop get request
const requestLoop = setInterval(() => {
    axios.get(URL).then((response) => {
        let html = response.data;
        let message = parser.parse(html);
        if (message) {
            sendMessage(message);
        }
    }).catch((error) => {
        console.log(error);
    });
}, INTERVAL_IN_MS);