const fs = require("fs");
var colors = require("colors");

const crearArchivo = async (base, listar, hasta) => {
  try {
    console.log("==============================".bgMagenta);
    console.log(`       TABLA DEL  ${base}      `.brightCyan);
    console.log("==============================".bgMagenta);

    let salida = "";
    for (let index = 0; index <= hasta; index++) {
      const resultado = base * index;
      salida += `${base} x ${index} = ${resultado}\n`;
    }
    if (listar) {
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `Archivo: tabla-${base}.txt creado!!`.bgMagenta;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  crearArchivo,
};
