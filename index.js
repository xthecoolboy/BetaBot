const Discord = require("discord.js");
const config = require('./config.json');
const client = new Discord.Client();
const { Client, Collection } = require('discord.js');
const ms = require("ms");
const bot = new Discord.Client({disableEveryone: true});

const printValues = function(values,text) {
  console.log(text ? text : 'Current values:');
  for (var key in values) {
    console.log(`  ${key} = \x1b[32m'${values[key]}'\x1b[0m`);
  }
}