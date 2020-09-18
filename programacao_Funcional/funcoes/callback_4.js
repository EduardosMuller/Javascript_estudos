const carrinho = [{
    nome: "Caneta",
    qtde: 10,
    preco: 7.99
  },
  {
    nome: "Impressora",
    qtde: 0,
    preco: 649.5
  },
  {
    nome: "Caderno",
    qtde: 4,
    preco: 27.1
  },
  {
    nome: "Lapis",
    qtde: 3,
    preco: 5.82
  },
  {
    nome: "Tesoura",
    qtde: 1,
    preco: 19.2
  },
];

const getNome = item => item.nome;
const qtdMaiorQueZero = item => item.qtde > 0;
// const qtdeMuitoGrande = item => item.qtde > 1000;
// const qtdeMaiorIgualAZero = item => item.qtde >= 0;

const nomeItensValidos = carrinho
  .filter(qtdMaiorQueZero)
  .map(getNome)

console.log(nomeItensValidos);

Array.prototype.meuFilter = function (fn) {
  const novoArr = []

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArr.push(this[i])
    }

  }

  return novoArr
}

const nomeItensValidos2 = carrinho
  .meuFilter(qtdMaiorQueZero)
  .map(getNome)

console.log(nomeItensValidos2)