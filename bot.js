const tmi = require('tmi.js');
const fs = require('fs');
require('dotenv').config();
require('./src/init.js');

const client = new tmi.Client({
  options: {
    debug: true,
    messagesLogLevel: "info"
  },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN // https://twitchapps.com/tmi/
  },
  channels: [
    process.env.DEV_CHANNEL_NAME,
    process.env.CHANNEL_NAME
  ]
});

//////////// LOAD EVENTS
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./src/events/${file}`);
  client.on(event.name, (...args) => event.execute(client, ...args));
}
//////////// LOAD COMMANDS
client.commands = new Map();
fs.readdir("./src/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./src/commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.connect().catch(console.error);
