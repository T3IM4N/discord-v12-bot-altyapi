##Giriş
İndirdiğiniz klasörün içindeki starter.bat botu başlatır, ama başlattığınız zaman karşınıza birsürü konsol hatası gelmektedir, bunlar hata değildir bize sadece eksik modül olduğunu söylemektedir, ve bizim gerekli modülleri indirmemiz gerekmektedir.
- #####nasıl modül indirilir:
İlk önce starter.bat ile botu çalıştırıp bizim için lazım olan modülleri öğrenelim, bunun için aşşağıdaki konsol çıktısına uyarak modülümüzün adını öğrenelim,
```bat
Error: Cannot find module 'discord.js'
```
modülümüzün adı tırnak işaretleri arasında gösterilmektedir, şimdi bu modulü nasıl indireceğimize gelelim, ilk önce indirdiğiniz klasörün içine gelip Shift+Mouse-sağ-tık yapıp Powershell veya Cmd penceresini açalım, ve içine aşşağıdaki modül indirmek için gerekli kodu yazalım,
```bat
npm install discord.js
```
npm install kalıcıdır sadece modül adı değişmelidir.

##Kullanım
- #####ready.js kullanımı
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
#####Ek olarak;
```javascript
client.user.setActivity(rich[random], "online");
```
yukarıdaki kod ile botun durumunu değiştirebilirsiniz,
######online - bot durumu online olur
######idle - bot durumu boşta olur
######online - bot durumu rahatsız etmeyin olur
üstteki kod satırında sadece tırnak işareti arasındaki yazıyı değişin aksi taktirde bot presence çalışmayabilir.

