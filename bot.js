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
            .setTitle('Gameroles')
            .setDescription('React with an emoji to get the role for a specified game. You will be notified whenever somebody wants to play this game! \n \n <:eu4:729747365824823316> Europa Universalis IV \n <:ck3:729802984300478525> Crusader Kings III \n <:hoi4:729790000538976268> Hearts of Iron IV \n <:stellaris:730193808385376290> Stellaris \n <:imp:730194012467888149> Imperator:Rome ')
            .setColor('BLUE')
            let MessageEmbed = message.channel.send(embed)
            .then(message => {message.react('729747365824823316').then(() => message.react('729802984300478525')).then(() => message.react('729790000538976268')).then(() => message.react('730193808385376290')).then(() => message.react('730194012467888149'))});
}    
    if(isValidCommand(message, "rules")) { 
        message.delete()
        let embed = new discord.MessageEmbed()
        .setTitle('Rules')
        .setDescription('Welcome to the **Strategists of Paradoxia** discord server! \n \n We play various games depending on our mood, but mostly games developed by *Paradox* such as: EU4, CK3, HOI4, etc. Or any other strategy game that exists in this universe. \n \n ***RULES*** \n ===== \n- Have respect for your fellow gamers.\n- Feel free to ask questions in the general chat or in the game chat if it’s related to that specific game.\n- Enjoy yourself and have a great time. \n \n - Feel free to use the music bot as long if it’s not ear-rape.\n - Be friendly towards others.\n - In-game rules needs to be discussed with the group you’re playing with.\n \n - Do **NOT** post explicit content, such as porn, insane racism, or gore.\n- Do **NOT** use any other language than English.\n- Do **NOT** advertise.\n- Do **NOT** argue with staff members regarding the rules. Their word is law!\n \n \n__*Every violation against these rules can result in a kick, temp ban or ban.*__\n \n \nIn this server we work with our own bot, made by one of our Generals. The bot, <@$730109109050802207> works with emoji reactions. Press the correct emoji’s to get a role for a specific game or to agree to a certain message.')
        .setColor('BLUE')
        let MessageEmbed = message.channel.send(embed)
        .then(message => {message.react('✅')});
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
if (reaction.message.channel.id === "730922895148187679") {
    if (reaction.emoji.id === '729747365824823316'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("732274986311745637");
    }
    if (reaction.emoji.id === '729802984300478525'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("732275122420842506");
    }
    if (reaction.emoji.id === '729790000538976268'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("732275160647860294");
    }
    if (reaction.emoji.id === '730193808385376290'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("732275209557639288");
    }
    if (reaction.emoji.id === '730194012467888149'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("732275274854694942");
    }
}})
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === "729830743261446284") {
        if (reaction.emoji.id === '✅'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("729980664807424040");
        }}
})
//remove role via reaction
client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === "730922895148187679") {
        if (reaction.emoji.id === '729747365824823316'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("732274986311745637");
        }
        if (reaction.emoji.id === '729802984300478525'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("732275122420842506");
        }
        if (reaction.emoji.id === '729790000538976268'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("732275160647860294");
        }
        if (reaction.emoji.id === '730193808385376290'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("732275209557639288");
        }
        if (reaction.emoji.id === '730194012467888149'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("732275274854694942");
        }
}
})