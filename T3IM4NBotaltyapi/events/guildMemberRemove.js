const Discord = require("discord.js")
const {prefix, version, embcolor, gircikKanal} = require('../configs.json');

module.exports = async member => {
  const cikis = await member.guild.channels.cache.get(gircikKanal);

  if (!cikis) return;
  cikis.send(new Discord.MessageEmbed()
  .setColor(embcolor)
  .setAuthor(member.user.tag, member.user.avatarURL())
  .setThumbnail(member.user.avatarURL())
  .setFooter(member.guild.name + " v" + version)
  .setDescription("❌ | <@"+member.id+"> Sunucudan ayrıldı")
  .setTimestamp())
};
