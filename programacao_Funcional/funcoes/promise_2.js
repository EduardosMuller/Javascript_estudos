//  setTimeout(function () {
//    console.log("Executando callback")

//    setTimeout(function () {
//      console.log("Executando callback 2")
//    }, 2000)

//  }, 2000)


function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("executando promise ...")
      resolve()
    }, time)
  })
}

waitFor()
  .then(() => waitFor())
  .then(waitFor())