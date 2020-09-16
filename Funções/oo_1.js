function Produto(nome, preco, desc = 0.15) {
  this.nome = nome
  this.preco = preco
  this.desc = desc

  this.precoFinal = function () {
    return this.preco * (1 - this.desc)
  }
}

const p1 = new Produto("Caneta", 8.59)
console.log(p1.preco)

const p2 = new Produto("Caderno", 27.31)
console.log(p2.nome)
console.log(p2.precoFinal().toFixed(2))