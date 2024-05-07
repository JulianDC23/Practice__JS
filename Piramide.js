//Imprimir una pirámide de la altura que se solicite por el usuario
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function piramide(alt) {
  for (let x = 1; x <= alt; x++) {
    let linea = '';
    for (let y = 1; y <= alt - x; y++) {
      linea += ' '; 
    }
    for (let z = 1; z <= 2 * x - 1; z++) {
      linea += '*'; 
    }
    console.log(linea);
  }
}
rl.question("Ingresa la altura de la piramide:", (alt) => {
  alt = parseInt(alt);
  if (!isNaN(alt) && alt > 0) {
    piramide(alt);
    rl.close();
  } else {
    console.log("Solo numeros positivos");
    rl.close();
  }
});