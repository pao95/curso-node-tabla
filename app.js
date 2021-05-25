const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

crearArchivo(argv.b, argv.l, argv.h)
  .then((a) => {
    console.log(a);
  })
  .catch((e) => {
    console.log(e);
  });