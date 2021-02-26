const Discord = require('discord.js');
const ayarlar = require("../configs.json")

var emb = ayarlar.embcolor;
exports.run = (client, message, args) => {
    
    if(!message.guild) return message.author.send(new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setAuthor(message.author.tag)
    .setFooter(client.user.username)
    .setDescription('❌ Bu komut sadece sunucularda kullanılır.'))
    if(args[0] >= 100) return message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.avatarURL())
    .setTimestamp()
    .setFooter(client.user.tag)
    .setDescription('❌ 100\'den fazla mesaj silmeme Discord API izin vermiyor, geçerli bir miktar giriniz.'))    
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
    .setFooter(client.user.username)
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL())
    .setDescription('❕ Silebilmem için bir miktar belirtmelisin.'))

    message.channel.bulkDelete(args[0], true).then(() => {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(emb)
        .setTimestamp()
        .setFooter(client.user.username)
        .setDescription(`${args} adet mesaj silindi`)
        .setAuthor(message.author.username,message.author.avatarURL()));
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle'],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Sunucunun ping değeri.',
  usage: 'sil'
};