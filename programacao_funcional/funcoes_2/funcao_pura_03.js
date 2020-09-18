// Uma função pura é uma função em que o valor
// de retornor é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

let qtdeDeExecucoes = 0

//Pura para Impura
function somar(a, b) {
  qtdeDeExecucoes++ //efeito colateral observável
  return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(33, 55))
console.log(somar(33, 55))
console.log(somar(33, 55))
console.log(somar(33, 55))
console.log(somar(33, 55))
console.log(somar(33, 55))
console.log(somar(33, 55))
console.log(somar(33, 55))
console.log(qtdeDeExecucoes)