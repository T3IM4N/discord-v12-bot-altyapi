const Discord = require("discord.js");
const moment = require('moment');
const conf = require('../configs.json');
const aylar = require('../utils/mounts.json');

module.exports = async member => {
    const giris = await member.guild.channels.cache.get(conf.gircikKanal);
    if (!giris) return;

    giris.send(new Discord.MessageEmbed()
    .setColor(conf.maincolor)
    .setAuthor(member.user.tag, member.user.avatarURL())
    .setThumbnail(member.user.avatarURL())
    .addField('Hesap Oluşturma Tarihi:', `${moment(member.user.createdAt).format('DD')} ${aylar[moment(member.user.createdAt).format('MM')]} ${moment(member.user.createdAt).format('YYYY HH:mm:ss')}`)
    .setFooter(member.guild.name + " - v" +conf.version)
    .setDescription("✅ | <@"+member.id+"> Sunucuya katıldı")
    .setTimestamp())
}
