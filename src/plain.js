const { getmeaning, gen, kapital } = require("./models/function.js");
var petungan = require("@kalenderjawa/petungan")

const generate = async(tahun) => {
  if(!tahun) throw new Error('[sengkalan.js] parameter tahun di butuhkan!')
  if(isNaN(tahun)) throw new Error('[sengkalan.js] parameter tahun harus berupa angka!')
  if(tahun < 1633) throw new Error('[sengkalan.js] parameter tahun harus lebih atau sama dengan dari 1633')
  if(tahun > 4284) throw new Error('[sengkalan.js] parameter tahun harus kurang atau sama dengan dari 4284')

  var gene = gen(tahun, false)
  var jw = petungan.konversiTahunMasehiKeTahunJawa(tahun);
  var genej = gen(jw, false)

  var res = `📅 Tahun Masehi: ${tahun}
☀️ Surya Sengkala: ${gene.map( a => a.charAt(0).toUpperCase() + a.substr(1) ).join(" ")}
📜 Makna Surya Sengkala:`

  var resjv = `📅 Tahun Jawa: ${jw}
🌙 Candra Sengkala: ${genej.map( a => a.charAt(0).toUpperCase() + a.substr(1) ).join(" ")}
📜 Makna Candra Sengkala:`

  for(var i = 0; i < tahun.toString().length; i++) {
    var makna_t = gene[i]
    var makna_t_jv = genej[i]
    var makna_v = getmeaning(gene[i], "id")
    var makna_v_jv = getmeaning(genej[i], "id")
    var a;

    res = `${res}\n   > ${kapital(makna_t)}: ${makna_v}`
    resjv = `${resjv}\n   > ${kapital(makna_t_jv)}: ${makna_v_jv}`
  }

  return res + '\n\n' + resjv;
}

module.exports = generate;
