require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();


// fs readdir
const fs = require('fs')

client.commands = new Discord.Collection

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command)
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.login(process.env.BOT_TOKEN)