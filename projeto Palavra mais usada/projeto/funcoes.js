const path = require("path")
const fs = require("fs")

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho)
      const arquivosCompletos = arquivos.map(arquivo => path.join(caminho, arquivo))
      resolve(arquivosCompletos)
    } catch (e) {
      reject(e)
    }
  })
}

function lerUmArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, {
        encoding: "utf-8"
      })
      resolve(conteudo.toString())
    } catch (e) {
      reject(e)
    }
  })
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerUmArquivo(caminho)))
}

function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter(elem => elem.endsWith(padraoTextual))
  }
}

function removerElementosSeVazio(array) {
  return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter(el => !el.includes(padraoTextual))
  }
}

function removerElementosSeApenasNumero(array) {
  return array.filter(el => {
    const num = parseInt(el.trim())
    return num !== num
  })
}

function removerSeSimbolos(simbolos) {
  return function (array) {
    return array.map(el => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join("")
      }, el)
    })
  }
}

function mesclarElementos(array) {
  return array.join(" ")
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo)
  }
}

function agruparElementos(palavras) {
  return Object.values(palavras.reduce((acc, palavra) => {
    const el = palavra.toLowerCase()
    const qtde = acc[el] ? acc[el].qtde + 1 : 1
    acc[el] = {
      palavra: el,
      qtde
    }
    return acc
  }, {}))
}

function ordernarPorAtribNumerico(atrib, ordem = "cresc") {
  return function (array) {
    const decrescente = (atribA, atribB) => atribB[atrib] - atribA[atrib]
    const crescente = (atribA, atribB) => atribA[atrib] - atribB[atrib]
    return array.sort(ordem === "cresc" ? crescente : decrescente)
  }
}

module.exports = {
  lerDiretorio,
  lerUmArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSeSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtribNumerico
}