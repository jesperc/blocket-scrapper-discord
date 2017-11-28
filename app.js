const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
const axios = require('axios');
const parser = require('./parser');

const URL = `https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&is=1&save_search=1&l=0&md=th&f=b&ca=14&w=111`;
const INTERVAL_IN_MS = 60000;
const DISCORD_CHANNEL_ID = '385206542074642453';

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
const client = new Discord.Client({
   token: auth.token,
   autorun: true
});

client.on('ready', (evt) => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');

    sendMessage('I will now fetch new apartments from blocket every 60 seconds and print them in this channel. Beep Boop.');
});

const sendMessage = (message) => {
    client.sendMessage({
        to: CHANNEL_ID, // channel id from discord
        message: message
    });
};

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