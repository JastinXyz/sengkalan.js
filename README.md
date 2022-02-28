# sengkalan.js
> ⚠️ node v14 and above is required!

**sengkalan.js** adalah package untuk menghasilkan _sengkalan_. Sengkalan atau Candra Sengkala adalah cara orang Jawa "menyembunyikan" atau mengubah angka tahun menjadi kalimat.

**sengkalan.js** merupakan hasil _porting_ dari [Sengkala Go](https://github.com/matriphe/sengkala) yang di tulis dalam Go dan terinspirasi dari [Sengkalan Python](https://github.com/lantip/sengkalan/) yang di tulis dalam Python.

**sengkalan.js** juga bisa di jalankan melalui CLI 🕶️.

# Kebutuhan
- nodejs v14 dan ke atas.

# Instalasi
```cli
npm i sengkalan.js
```

**atau jika ingin menggunakan cli:**

```cli
npm i -g sengkalan.js
```

# Penggunaan
```js
(async () => {
  const sengkalan = require("sengkalan.js");

  const res = await sengkalan.generate(2022);
  console.log(res);
})()
```

# Contoh Respon
```json
{
  "surya": {
    "tahun_masehi": 2022,
    "sengkala": "Karnan Dwi Luhur Swiwi",
    "makna": {
      "karnan": "senang, puas, telinga",
      "dwi": "dua",
      "luhur": "tinggi, di atas, agung, mulia",
      "swiwi": "sayap"
    }
  },
  "candra": {
    "tahun_jawa": 1955,
    "sengkala": "Yaksa Tata Wilasita Prabu",
    "makna": {
      "yaksa": "raksasa",
      "tata": "atur, angin, cara",
      "wilasita": "liang, liang kumbang",
      "prabu": "raja, bertanggungjawab, pantas"
    }
  }
}
```

# Plain Respon Example
```js
(async () => {
  const sengkalan = require("sengkalan.js");

  const res = await sengkalan.plain(2022);
  console.log(res);
})()
```

# Contoh Plain Respon
```cli
📅 Tahun Masehi: 2022
☀ Surya Sengkala: Karnan Dwi Luhur Swiwi
📜 Makna Surya Sengkala:
   > Karnan: senang, puas, telinga
   > Dwi: dua
   > Luhur: tinggi, di atas, agung, mulia
   > Swiwi: sayap

📅 Tahun Jawa: 1955
🌙 Candra Sengkala: Yaksa Tata Wilasita Prabu
📜 Makna Candra Sengkala:
   > Yaksa: raksasa
   > Tata: atur, angin, cara
   > Wilasita: liang, liang kumbang
   > Prabu: raja, bertanggungjawab, pantas
```

# 🕶️ Cli
Setelah menginstal dengan `npm i -g sengkalan.js` lalu jalankan command di bawah di cmd mu.

```cli
sengkalanjs
```

# Dokumentasi
`<sengkalan>.generate(tahun, [jumlah])`: Untuk menghasilkan dalam bentuk JSON. `[jumlah]` optional.

```js
const res = await sengkalan.generate(2022)
return res;

// atau dengan jumlah yang di tentukan misalnya 5

const res = await sengkalan.generate(2022, 5)
return res;
```

`<sengkalan>.plain(tahun)`: Untuk menghasilkan dalam bentuk plain text biasa.
```js
const res = await sengkalan.plain(2022)
return res;
```

# Changelog
> see [CHANGELOG.md at Github](https://github.com/JastinXyz/sengkalan.js/blob/main/CHANGELOG.md)
