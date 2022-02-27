const { getmeaning, gen } = require("./models/function.js");
var petungan = require("@kalenderjawa/petungan")

const generate = async(tahun) => {
  if(!tahun) throw new Error('[sengkalan.js] parameter tahun di butuhkan!')
  if(isNaN(tahun)) throw new Error('[sengkalan.js] parameter tahun harus berupa angka!')
  if(tahun < 1633) throw new Error('[sengkalan.js] parameter tahun harus lebih atau sama dengan dari 1633')
  if(tahun > 4284) throw new Error('[sengkalan.js] parameter tahun harus kurang atau sama dengan dari 4284')

  var gene = gen(tahun, false)
  var jw = petungan.konversiTahunMasehiKeTahunJawa(tahun);
  var genej = gen(jw, false)
  const res = {
    "surya": {
      "tahun_masehi": tahun,
      "sengkala": gene.map( a => a.charAt(0).toUpperCase() + a.substr(1) ).join(" "),
      "makna": {}
    },
    "candra": {
      "tahun_jawa": jw,
      "sengkala": genej.map( a => a.charAt(0).toUpperCase() + a.substr(1) ).join(" "),
      "makna": {}
    }
  }

  for(var i = 0; i < tahun.toString().length; i++) {
    var makna_t = gene[i]
    var makna_t_jv = genej[i]
    var makna_v = getmeaning(gene[i], "id")
    var makna_v_jv = getmeaning(genej[i], "id")
    res.surya.makna[makna_t] = await makna_v;
    res.candra.makna[makna_t_jv] = await makna_v_jv;
  }

  return res;
}

module.exports = generate;
