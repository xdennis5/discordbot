const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDkxOTk5MTc3NDQyNTkwNzMx.DoQB3A.TaFbW9Ddud8qk_d7XqB5GvKhqV0'

bot.registry.registerGroup('commands', 'Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message)
{
    if(message.content == 'Hello bot')
    {
        message.channel.sendMessage('Hello ' + message.author);
    }
});

bot.on('ready', function()
{
    console.log("Ready");
});

bot.login(TOKEN);