const { getmeaning, gen, kapital, emo } = require("./models/function.js");
var petungan = require("@kalenderjawa/petungan");

const plain = (tahun, jumlah) => {
  if (!tahun) throw new Error("[sengkalan.js] parameter tahun di butuhkan!");
  if (isNaN(tahun))
    throw new Error("[sengkalan.js] parameter tahun harus berupa angka!");
  if (tahun < 1633)
    throw new Error(
      "[sengkalan.js] parameter tahun harus lebih atau sama dengan dari 1633"
    );
  if (tahun > 4284)
    throw new Error(
      "[sengkalan.js] parameter tahun harus kurang atau sama dengan dari 4284"
    );

  var gene = gen(tahun, false);
  var jw = petungan.konversiTahunMasehiKeTahunJawa(tahun);
  var genej = gen(jw, false);

  var res = `📅 Tahun Masehi: ${tahun}
☀️ Surya Sengkala: ${gene
    .map((a) => a.charAt(0).toUpperCase() + a.substr(1))
    .join(" ")}
📜 Makna Surya Sengkala:`;

  var resjv = `📅 Tahun Jawa: ${jw}
🌙 Candra Sengkala: ${genej
    .map((a) => a.charAt(0).toUpperCase() + a.substr(1))
    .join(" ")}
📜 Makna Candra Sengkala:`;

  for (var i = 0; i < tahun.toString().length; i++) {
    var makna_t = gene[i];
    var makna_t_jv = genej[i];
    var makna_v = getmeaning(gene[i], "id");
    var makna_v_jv = getmeaning(genej[i], "id");
    var a;

    res = `${res}\n   > ${kapital(makna_t)}: ${makna_v}`;
    resjv = `${resjv}\n   > ${kapital(makna_t_jv)}: ${makna_v_jv}`;
  }

  /*
  Parameter jumlah masih dalam pengembangan... Di versi 1.0.8 anda hanya dapat
  membuat sengkala dengan jumlah yang di tentukan hanya pada fungsi generate.

  Lihat changelog untuk lebih lanjut.
  */

  if (!jumlah) {
    return res + "\n\n" + resjv;
  } else {
    if (isNaN(jumlah))
      throw new Error("[sengkalan.js] parameter jumlah harus berupa angka!");

    for (var j = 0; j < jumlah; j++) {
      var res2 = `📅 Tahun Masehi: ${tahun}
☀️ Surya Sengkala: ${gene
        .map((a) => a.charAt(0).toUpperCase() + a.substr(1))
        .join(" ")}
📜 Makna Surya Sengkala:`;

      var resjv2 = `📅 Tahun Jawa: ${jw}
🌙 Candra Sengkala: ${genej
        .map((a) => a.charAt(0).toUpperCase() + a.substr(1))
        .join(" ")}
📜 Makna Candra Sengkala:`;

      for (var i = 0; i < tahun.toString().length; i++) {
        var makna_t = gene[i];
        var makna_t_jv = genej[i];
        var makna_v = getmeaning(gene[i], "id");
        var makna_v_jv = getmeaning(genej[i], "id");
        var a;

        res2 = `${res2}\n   > ${kapital(makna_t)}: ${makna_v}`;
        resjv2 = `${resjv2}\n   > ${kapital(makna_t_jv)}: ${makna_v_jv}`;
      }

        return emo(parseInt(j + 1)) + ":\n" + res2 + "\n\n" + resjv2 + "\n\n";
        // return parseInt(j + 1) + ":\n" + res2 + "\n\n" + resjv2 + "\n\n";
        // console.log(emo(parseInt(j + 1)) + ":\n" + res2 + "\n\n" + resjv2 + "\n\n")
    }
  }
};

module.exports = plain;
