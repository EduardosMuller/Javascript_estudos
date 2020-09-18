// Uma função pura é uma função em que o valor
// de retornor é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14

// impura = PI é um valor externo!
function areaCircImpura(raio) {
  return raio * raio * PI
}

console.log(areaCircImpura(10))

// pura 
function areaCircPura(raio, pi) {
  return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, Math.PI))
console.log(areaCircPura(10, 3.141592))