const reqEvent = (event) => require(`../events/${event}`);
const ayarlar = require("../configs.json");
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  if(ayarlar.gircikLog = false){
  } else {
    client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
    client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  }
  client.on('disconnect', reqEvent('disconnect'));
  client.on('reconnecting', reqEvent('reconnecting'));
  client.on('warn', reqEvent('warn'));
  client.on('error', reqEvent('error'));
};
