const chalk = require("chalk");
const fs = require("fs");
const ayarlar = require("../configs.json");

var prefix = ayarlar.prefix;
var vers = ayarlar.version;

module.exports = async (client) => {
  fs.readdir("./commands/", async (err, files) => {
    var log1 = await chalk.green("[------------] Asistant [-------------]");
    var log2 = await chalk.green(`]> ${client.guilds.cache.size} tane sunucuya hizmet veriyor`);
    var log3 = await chalk.green(`]> ${client.users.cache.size} kullaniciya hizmet veriyor`);
    var log4 = await chalk.green(`]> ${client.channels.cache.size} kanala hizmet veriyor`);
    var log5 = await chalk.green("]> Komut Sayısı: " + files.length);
    var log6 = await chalk.green("]> Prefix: " + prefix);
    var log7 = await chalk.green("]> Sürüm: " + vers);
    var log8 = await chalk.green("]> Bot ID'si: " + client.user.id);
    var log9 = await chalk.green("]> Bot Isim: " + client.user.username);
    var log10 = await chalk.green("[------------] Asistant [-------------]");

    console.log(
        log1 +
        "\n" +
        log2 +
        "\n" +
        log3 +
        "\n" +
        log4 +
        "\n" +
        log5 +
        "\n" +
        log6 +
        "\n" +
        log7 +
        "\n" +
        log8 +
        "\n" +
        log9 +
        "\n" +
        log10
    );
  });

  /*________Bot Status___________*/
  var rich = [
    `Arvision | ${client.guilds.cache.size} Sunucu`,
    "!yardım | !help | !discord",
  ];

  setInterval(function () {
    var random = Math.floor(Math.random() * (rich.length - 0 + 0) + 0);
    client.user.setActivity(rich[random], "online");
  }, 2 * 2500);

  /*
    idle = boşta
    dnd = rahatsız etmeyin
    online = çevrimiçi
  */
};
