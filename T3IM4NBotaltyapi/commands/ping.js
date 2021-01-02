const Discord = require('discord.js');
const ayarlar = require("../configs.json")

var emb = ayarlar.embcolor;
exports.run = (client, message, args) => {

  if(!message.guild) return message.channel.send(new Discord.MessageEmbed()
  .setDescription('❌ Bu komut sadece sunucularda kullanılır.')
  .setColor(emb)
  .setAuthor(message.author.username,message.author.avatarURL())
  .setTimestamp()
  .setFooter(client.user.username));

  message.channel.send(new Discord.MessageEmbed()
  .setColor(emb)
  .setAuthor(message.author.username,message.author.avatarURL())
  .addField(client.user.username + " botunun sunucunuzdaki gecikme süresi: ", `${Math.round(client.ws.ping)} ms`)
  .setTimestamp()
  .setFooter(client.user.username));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Sunucunun ping değeri.',
  usage: 'ping'
};