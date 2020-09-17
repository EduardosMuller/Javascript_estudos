const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "../dados/legendas")

const simbolos = [
  ".",
  "?",
  "-",
  ",",
  "♪",
  '"',
  "_",
  "<i>",
  "</i>",
  "\r",
  "{",
  "}",
  "(",
  ")",
]

function agruparPalavras(palavras) {
  return palavras.reduce((acc, palavra) => {
    const p = palavra.toLowerCase()
    if (acc[p]) {
      acc[p] += 1
    } else {
      acc[p] = 1
    }
    return acc
  }, {})
}

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom(".srt"))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor("\n"))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir("-->"))
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.removerSeSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor(" "))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeApenasNumero)
  .then(agruparPalavras)
  .then(console.log)