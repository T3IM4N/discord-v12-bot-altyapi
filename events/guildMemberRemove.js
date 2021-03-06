const Discord = require("discord.js")
const conf = require('../configs.json');

module.exports = async member => {
  const cikis = await member.guild.channels.cache.get(conf.gircikKanal);

  if (!cikis) return;
  cikis.send(new Discord.MessageEmbed()
  .setColor(conf.maincolor)
  .setAuthor(member.user.tag, member.user.avatarURL())
  .setThumbnail(member.user.avatarURL())
  .setFooter(member.guild.name + " - v" + conf.version)
  .setDescription("❌ | <@"+member.id+"> Sunucudan ayrıldı")
  .setTimestamp())
};
