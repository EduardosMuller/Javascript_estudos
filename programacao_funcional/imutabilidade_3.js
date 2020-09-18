const pessoa = {
  nome: "Eduardo",
  altura: 1.75,
  cidade: "São Paulo",
  end: {
    rua: "Jabaquara"
  }
}
// Atribuição por Referência
const outraPessoa = pessoa
// Passagem por Referência (Função impura!)
function alterarPessoa(pessoa) {
  const novaPessoa = {
    ...pessoa,

  }
  novaPessoa.nome = "João"
  novaPessoa.cidade = "Fortaleza"
  novaPessoa.end.rua = "Paulista"
  return novaPessoa
}

const novaPessoa = alterarPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // atribuição por valor( cópia!)
a++
b--

console.log(a, b)