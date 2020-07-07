const { Client } = require('discord.js');
const client = new Client();
const TOKEN = require('./config.json');

client.login(process.env.token);

client.on('ready', () => {
    console.log("Logged in!")
})