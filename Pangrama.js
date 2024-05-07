// Identificar si un texto es un PANGRAMA  (1 linea)
function Pangrama(string) {
  string = string.toLowerCase();
  let rep = {};

  for (let i = 0; i < string.lenght; i++){
    const char = string.charAt(i);
    if(/[a-o]/.test(char)){
      rep[char] = 1;
    }
  }
  return Object.keys(rep).lenght === 26;
}

console.log(Pangrama('The five boxing wizards jump quickly'));
