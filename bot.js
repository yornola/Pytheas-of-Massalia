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
        // command for !games, get role via reaction
        let messageArray = message.content.split(" ");
        let command = messageArray[0]; 
        if(isValidCommand(message, "games")) { 
            message.delete()
            let embed = new discord.MessageEmbed()
            .setTitle('Gameroles \n React with an emoji to get the role for a specified game. You will be notified whenever somebody wants to play this game!')
            .setDescription('<:eu4:729747365824823316> Europa Universalis IV \n <:ck3:729802984300478525> Crusader Kings III \n <:hoi4:729790000538976268> Hearts of Iron IV \n <:stellaris:730193808385376290> Stellaris \n <:imp:730194012467888149> Imperator:Rome ')
            .setColor('BLUE')
            let MessageEmbed = message.channel.send(embed)
            .then(message => {message.react('729747365824823316').then(() => message.react('729802984300478525')).then(() => message.react('729790000538976268')).then(() => message.react('730193808385376290')).then(() => message.react('730194012467888149'))});
}    
// end of retun
}
// end of commands
});

//give role via reaction
client.on('messageReactionAdd', async (reaction, user) => {
if (reaction.message.partial) await reaction.message.fetch();
if (reaction.partial) await reaction.fetch();
if (user.bot) return;
if (!reaction.message.guild) return;
if (reaction.message.channel.id === "732645935930278049") {
if (reaction.emoji.id === '732340930140569715'){
    await reaction.message.guild.members.cache.get(user.id).roles.add("732637333039612316");
}
if (reaction.emoji.id === '732340928907313183'){
    await reaction.message.guild.members.cache.get(user.id).roles.add("732637269806284900");
}
if (reaction.emoji.id === '732340928173309994'){
    await reaction.message.guild.members.cache.get(user.id).roles.add("732637303465574493");
}
}
})
//remove role via reaction
client.on('messageReactionRemove', async (reaction, user) => {
if (reaction.message.partial) await reaction.message.fetch();
if (reaction.partial) await reaction.fetch();
if (user.bot) return;
if (!reaction.message.guild) return;
if (reaction.message.channel.id === "732645935930278049") {
if (reaction.emoji.id === '732340930140569715'){
    await reaction.message.guild.members.cache.get(user.id).roles.remove("732637333039612316")
}
if (reaction.emoji.id === '732340928907313183'){
    await reaction.message.guild.members.cache.get(user.id).roles.remove("732637269806284900");
}        
if (reaction.emoji.id === '732340928173309994'){
    await reaction.message.guild.members.cache.get(user.id).roles.remove("732637303465574493");
}
}
})