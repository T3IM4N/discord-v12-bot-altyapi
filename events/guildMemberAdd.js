const Discord = require("discord.js");
const moment = require('moment');
const conf = require('../configs.json');
const aylar = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
};

module.exports = async member => {
    const giris = await member.guild.channels.cache.get(conf.gircikKanal);
    if (!giris) return;

    giris.send(new Discord.MessageEmbed()
    .setColor(conf.maincolor)
    .setAuthor(member.user.tag, member.user.avatarURL())
    .setThumbnail(member.user.avatarURL())
    .addField('Hesap Oluşturma Tarihi:', `${moment(member.user.createdAt).format('DD')} ${aylar[moment(member.user.createdAt).format('MM')]} ${moment(member.user.createdAt).format('YYYY HH:mm:ss')}`)
    .setFooter(client.user.username + " - v" +conf.version)
    .setDescription("✅ | <@"+member.id+"> Sunucuya katıldı")
    .setTimestamp())
}
