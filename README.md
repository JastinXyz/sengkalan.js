# sengkalan.js
> ⚠️ node v14 and above is required!

**sengkalan.js** adalah package untuk menghasilkan _sengkalan_. Sengkalan atau Candra Sengkala adalah cara orang Jawa "menyembunyikan" atau mengubah angka tahun menjadi kalimat.

**sengkalan.js** merupakan hasil _porting_ dari [Sengkala Go](https://github.com/matriphe/sengkala) yang di tulis dalam Go dan terinspirasi dari [Sengkalan Python](https://github.com/lantip/sengkalan/) yang di tulis dalam Python.

# Kebutuhan
- nodejs v14 annd above.

# Instalasi
```cli
npm i sengkalan.js
```

# Penggunaan
```js
(async () => {
  const sengkalan = require("sengkalan.js");

  console.log(await sengkalan.generate(2022))
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
