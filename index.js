require("dotenv").config();
const {Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildScheduledEvents,
    ]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildScheduledEventCreate', (event) => {
    const channel = event.guild.channels.cache.find(ch => ch.name === "eventnotifications")
    if (channel) {
        channel.send(`A new event has been created: **${event.name}**\n${event.url}`);
    }
});

client.login(process.env.BOT_TOKEN);
