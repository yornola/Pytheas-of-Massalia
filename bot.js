require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const config = require("./config/config.json");
const PREFIX = process.env.PREFIX;
const talkedRecently = new Set();
client.login(process.env.token);
client.on('ready', () => {
    console.log("Our bot has logged in.");
    client.user.setActivity("The First Explorer")
})

const isValidCommand = (message, cmdName) => message.content.toLocaleLowerCase().startsWith(PREFIX + cmdName)
client.on('message', function(message) {
    if(message.author.bot) 
    return; {       
// command for !eu4, only in specified channel (gamecalls), 1 use every minute
        if(isValidCommand(message, "eu4")) {
            if(message.channel.id != '730922699844747355') {
            message.channel.send('Cannot use that command here, go to' + " " + `<#730922699844747355>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&732274986311745637> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Europa Universalis IV, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }  
        }
// command for !ck3, only in specified channel (gamecalls), 1 use every minute
        if(isValidCommand(message, "ck3")) {
            if(message.channel.id != '730922699844747355') {
            message.channel.send('Cannot use that command here, go to' + " " +  `<#730922699844747355>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&732275122420842506> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Crusader Kings III, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }
        }            
// command for !hoi4, only in specified channel (gamecalls), 1 use every minute            
        if(isValidCommand(message, "hoi4")) {
            if(message.channel.id != '730922699844747355') {
            message.channel.send('Cannot use that command here, go to' + " " +  `<#730922699844747355>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&732275160647860294> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Hearts of Iron IV, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }
        }
// command for !stl, only in specified channel (gamecalls), 1 use every minute
        if(isValidCommand(message, "stl")) {
            if(message.channel.id != '730922699844747355') {
            message.channel.send('Cannot use that command here, go to' + " " + `<#730922699844747355>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&732275209557639288> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Stellaris, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }
        }
// command for !imp, only in specified channel (gamecalls), 1 use every minute
        if(isValidCommand(message, "imp")) {
            if(message.channel.id != '730922699844747355') {
            message.channel.send('Cannot use that command here, go to' + " " + `<#730922699844747355>` + " -" + `<@${message.author.id}>`);
            message.delete()
            } else { 
                if (talkedRecently.has(message.author.id)) {
                    message.channel.send("Please, don't spam the commands " + `<@${message.author.id}>`+". You have to wait 1 minute to use this command again.");
                    message.delete()
                    } else {
                        message.channel.send(`[Looking for <@&732275274854694942> players]`+" "+ `<@${message.author.id}>` + " " +"wants to play Imperator:Rome, go into the voice lobby to join them!");
                        message.delete();}
                        talkedRecently.add(message.author.id);
                        setTimeout(() => {
                            talkedRecently.delete(message.author.id);
                            }, 60000); 
                    }
        }        
// end of retun
    }
// end of commands
});