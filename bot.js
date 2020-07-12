require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = process.env.PREFIX;
const talkedRecently = new Set();
client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
    console.log("Our bot has logged in.");
    client.user.setActivity("The First Explorer")
})

const isValidCommand = (message, cmdName) => message.content.toLocaleLowerCase().startsWith(PREFIX + cmdName)
client.on('message', function(message) {
    if(message.author.bot) return; {
// command for !eu4, only in specified channel (gamecalls), 1 use every minute
        if(isValidCommand(message, "eu4")) {
            if(message.channel.id != '730838097146937367') {
            message.channel.send('Cannot use that command here, go to' + `<#730838097146937367>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 more minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&730140518436044912> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Europa Universalis IV, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }  
        }
// command for !ck3, only in specified channel (gamecalls), 1 use every minute
        if(isValidCommand(message, "ck3")) {
            if(message.channel.id != '730838097146937367') {
            message.channel.send('Cannot use that command here, go to' + `<#730838097146937367>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 more minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&730140539621605450> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Crusader Kings III, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }
        }            
// command for !hoi4, only in specified channel (gamecalls), 1 use every minute            
        if(isValidCommand(message, "hoi4")) {
            if(message.channel.id != '730838097146937367') {
            message.channel.send('Cannot use that command here, go to' + `<#730838097146937367>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 more minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&730140495795191950> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Hearts of Iron IV, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }
            
        }
// command for !...., only in specified channel (gamecalls), 1 use every minute
    }
});