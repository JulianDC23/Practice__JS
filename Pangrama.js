// Identificar si un texto es un PANGRAMA  (1 linea)
const pangrama = (frase) => new Set([...frase.toLowerCase().replace(/[^a-z]/g, '')]).size === 26;
console.log(pangrama("Pack my box with five dozen liquor jugs")); 
console.log(pangrama("This is not a pangram")); 