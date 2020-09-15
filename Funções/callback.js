function exec(fn, a, b) {
  return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtraiNoTerminal = (x, y) => console.log(x - y);
const subtrair = (w, z) => w - z;

exec(somarNoTerminal, 56, 38);
exec(subtraiNoTerminal, 182, 22);

const resultado = exec(subtrair, 50, 25);
console.log(resultado);

const fn = () => console.log("Exec . . .");

setInterval(fn, 1000);
