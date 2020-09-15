// arrow function

const boaNoite = () => console.log("Boa noite");

boaNoite();

const saudacao = (nome) => `Saudação ${nome} meu consagrado!`;
console.log(saudacao("Eduardo"));

//this

Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
};

const numeros = [1, 2, 3, 500];
numeros.ultimo();
