// Uma função pura é uma função em que o valor
// de retornor é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis


// impura 
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))
console.log(gerarNumeroAleatorio(1, 10))