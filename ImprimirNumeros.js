//Contar del 1 al 100 e imprimir lo siguiente en los siguientes casos
// -multiplo e 3 -"fizz"
// -multiplo de 5 -"fuzz"
// -multiplo de 3 y 5 - "Caera la republica"  -- function

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, " = CAERA LA REPUBLICA");
  }else{
    if (i % 5 === 0) {
    console.log(i, " = FUZZ");
  }
    if (i % 3 === 0) {
      console.log(i, " = FIZZ");
    }
  }
}
