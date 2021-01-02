[![KZSYSTEM](https://cdn.discordapp.com/attachments/795066298295910420/795071380839202827/kzsystemtextlogo.png "KZSYSTEM")](https://github.com/T3IM4N "KZSYSTEM")
## Giriş
İndirdiğiniz klasörün içindeki starter.bat botu başlatır, ama başlattığınız zaman karşınıza birsürü konsol hatası gelmektedir, bunlar hata değildir bize sadece eksik modül olduğunu söylemektedir, ve bizim gerekli modülleri indirmemiz gerekmektedir.
- ##### Nasıl modül indirilir:
İlk önce starter.bat ile botu çalıştırıp bizim için lazım olan modülleri öğrenelim, bunun için aşşağıdaki konsol çıktısına uyarak modülümüzün adını öğrenelim,
```bat
Error: Cannot find module 'discord.js'
```
modülümüzün adı tırnak işaretleri arasında gösterilmektedir, şimdi bu modulü nasıl indireceğimize gelelim, ilk önce indirdiğiniz klasörün içine gelip Shift+Mouse-sağ-tık yapıp Powershell veya Cmd penceresini açalım, ve içine aşşağıdaki modül indirmek için gerekli kodu yazalım,
```bat
npm install discord.js
```
`npm install` kalıcıdır sadece modül adı değişmelidir, `quick.db` kurulumu için [bu bağlantıya](https://stackoverflow.com/questions/55152761/npm-wont-install-quick-db-returns-these-errors "stackoverflow") bakabilirsiniz.

## Kullanım
- ##### ready.js kullanımı
İndirdiğiniz klasörün içinde events klasöründeki ready.js adlı dosyayı açıyoruz,
şimdi bota yeni presence eklemek için ne yapmanız gerektiğini anlatıyorum,
aşşağıdaki taslaktaki gibi,
```javascript
  var rich = [
	  `deneme1`,
	  `deneme2`,
	  `deneme3`,
	  `deneme4`
  ];
```
deneme adlı satırları arttırarak yeni presence ekleyebilirsiniz, sınır yoktur!
##### Ek olarak;
```javascript
client.user.setActivity(rich[random], "online");
```
yukarıdaki kod ile botun durumunu değiştirebilirsiniz,
###### online - bot durumu online olur
###### idle - bot durumu boşta olur
###### dnd - bot durumu rahatsız etmeyin olur
üstteki kod satırında sadece tırnak işareti arasındaki yazıyı değişin aksi taktirde bot presence çalışmayabilir.

- ##### configs.json kullanımı
İndirdiğiniz klasörün içindeki configs.json dosyasını açın, ve içindeki bilgileri doğru bir şekilde doldurunuz

- ##### Yeni komut ekleme
İndirdiğiniz klasörün içindeki events klasörüne yeni bir js uzantılı dosya ekliyoruz, dosya adını türkçe karakter içermeden koymak yararınıza olacaktır, sonrasında dosyanın içine aşşağıdaki taslağı yapıştırıyoruz,

```javascript
const Discord = require('discord.js');
const ayarlar = require("../configs.json")
/*^^^^gerekli modüllerin ekleneceği bölüm^^^^*/

exports.run = (client, message, args) => {
 // işler kodların bulunacağı yer eğer burada hiç birşey yoksa komutta doğal olarak bir yanıt göndermeyecektir, ve herhangi bir konsol çıktısı göndermez
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [], // komutu yeni kısayollar eklemek için kullanılır köşeli parantezin içine "tmn","kz","test" şeklinde eklemelisiniz.
	permLevel: 0 // komutu kullanmak için gerekli yetki seviyesi 0 herkesin kullanabilmesi demek.
};

exports.help = {
	name: 'deneme',
	description: 'bu komut ne işe yarar.',
	usage: 'komut nasıl kullanılır örn : deneme <id> gibi.'
};
```
bu şekilde çoğaltarak kullanabilirsiniz.

Dipnot: Eğer hiç bilginiz yoksa birsürü konsol hatası ve benzeri hatalar almanız çok normal, ve bunun için önemli olan Öğrenmek! sizde [Discord Sunucumuza](https://discord.com/invite/sZV8bBfME8 "T3IM4N++") gelerek bilmediğiniz şeyleri öğrenebilir ve yetkililerden yardım alabilirsiniz.

[![Press f to pay respect](https://cdn.discordapp.com/attachments/736576268937723967/763426537574891550/kzsystemlogogif.gif)](https://discord.gg/sZV8bBfME8)

## Ek Bağlantılar
#### Discord:
Developer Discord: `T3IM4N#6185`

[![T3IM4N++](https://img.shields.io/discord/783456542078926860?color=%237289DA&label=T3IM4N&logo=discord&logoColor=white)](https://discord.com/invite/sZV8bBfME8)

[![KZSYSTEM](https://img.shields.io/discord/676684128120471572?color=%237289DA&label=KZSYSTEM&logo=discord&logoColor=white)](https://discord.com/invite/sVePrXS)

#### YouTube:
R4V3N Oyun kanalı: [Cüneyt Sedef](https://www.youtube.com/channel/UCXG8WnwhdBXSfME8__wQ4vA "Cüneyt Sedef")

T3IM4N Development kanalı: [T3IM4N](https://www.youtube.com/channel/UCWAkUxLxmj7M50atx-oWkzw/about "T3IM4N")
