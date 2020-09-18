const carrinho = [{
    nome: 'Caneta',
    qtde: 10,
    preco: 7.99,
    fragil: true
  },
  {
    nome: 'Impressora',
    qtde: 0,
    preco: 649.50,
    fragil: true
  },
  {
    nome: 'Caderno',
    qtde: 4,
    preco: 27.10,
    fragil: false
  },
  {
    nome: 'Lapis',
    qtde: 3,
    preco: 5.82,
    fragil: false
  },
  {
    nome: 'Tesoura',
    qtde: 1,
    preco: 19.20,
    fragil: true
  },
]

//filter, map e redyuce

// 1.0 fragil: true;
// 2.0 qtde * preco => total
// 3.0 media totais

const eFragil = item => item.fragil == true;
const totalPreco = item => item.qtde * item.preco;
const mediaTotal = (acc, el) =>

  console.log(carrinho.filter(eFragil).map(totalPreco));
// console.log(carrinho.map(totalPreco));
// console.log(carrinho.reduce(mediaTotal))