const Discord = require('discord.js');
const auth = require('./auth.json');
const axios = require('axios');
const parser = require('./parser');

const URL = `https://www.blocket.se/bostad/uthyres?cg_multi=3020&sort=&ss=0&se=5&ros=&roe=3&bs=&be=&mre=10000&q=&q=&q=&is=1&save_search=1&l=0&md=th&f=b&ca=14&w=111`;
const READY = 'I will now fetch new apartments from blocket every 60 seconds and print them in this channel. Beep Boop.';
const INTERVAL_IN_MS = 60000;
const CHANNEL_ID = '385206081594327042';

const client = new Discord.Client();

let status = "Running";

// bot is ready
client.on('ready', (event) => {
    console.log('Connected!');
    sendMessage(READY);
});

client.on('error', (error) => {
    console.log(error);
    sendMessage("Client on error");
});

client.on('disconnect', (event) => {
    console.log(event);
    sendMessage("Client on disconnect");
});

client.on('message', (message) => {
    console.log(message.content);
    if (message.content === '!status') {
        sendMessage(`My status is: ${status}`);
        axios.get(URL).then((response) => {
            sendMessage('Get request: Successful');
        }).catch((error) => {
            sendMessage('Get request: Failure');
        });
    }
});

// send message to Discord channel
const sendMessage = (message) => {
    let channel = client.channels.find(c => c.id === CHANNEL_ID);
    channel.send(message);
};

// loop get request
const requestLoop = setInterval(() => {
    axios.get(URL).then((response) => {
        let html = response.data;
        let message = parser.parse(html);
        if (message) {
            sendMessage(message);
        }
    }).catch((error) => {
        console.log(error);
        sendMessage("Error occured on axios get request!");
        sendMessage(error);
        status = "Error";
    });
}, INTERVAL_IN_MS);

client.login(auth.token);