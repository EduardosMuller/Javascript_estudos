// Function declaration
function bomDia() {
  console.log("Bom dia")
}

bomDia()

// Function expression

const boaTarde = function () {
  console.log("Boa tarde!")
}

let x = boaTarde() // undefined
console.log(x)

function somar(a, b) {
  return a + b
}

let resultado = somar(3, 5)
console.log(resultado)

resultado = somar(3, 4, 5, 6, 7)
console.log(resultado)

resultado = somar(3)
console.log(resultado)