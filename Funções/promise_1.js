//Promise sempre devolve um valor, no caso de multiplos valores criar um objeto ou array

function firstElement(array) {
  return array[0]
}

function firstLetter(string) {
  return string[0]
}

const lowerCaseLetter = letter => letter.toLowerCase()

new Promise(function (response) {
    response(["Ana", "Bia", "Carlos", "Daniel"])
  })
  .then(firstElement)
  .then(firstLetter)
  .then(lowerCaseLetter)
  .then(console.log)