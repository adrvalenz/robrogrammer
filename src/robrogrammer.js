require('dotenv').config();

const { Client, Intents, MessageSelectMenu } = require('discord.js');

const robrogrammer = new Client({intents : [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES], partials : ["MESSAGE", "REACTION"], });

robrogrammer.on('ready', async () => {
    console.log(`Client ${robrogrammer.user.tag} has logged in!`);
});

robrogrammer.on('messageCreate', async (messageCreate) => {
    //process message and stuff here...
});