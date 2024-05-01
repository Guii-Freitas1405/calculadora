const input1 = document.getElementById("inp1");
console.log(input1);

const input2 = document.getElementById("inp2");
console.log(input2);

const button = document.getElementById("button");
console.log(button);

const button2 = document.getElementById("button2");
console.log(button2);

const paragrafo = document.getElementById("result");
console.log(paragrafo);

function somar() {
  const valor1 = Number(input1.value);
  const valor2 = Number(input2.value);

  const res = valor1 + valor2;
  paragrafo.innerText = res;
}

function diminuir() {
  const valor1 = Number(input1.value);
  const valor2 = Number(input2.value);

  const res = valor1 - valor2;
  paragrafo.innerText = res;
}

button.addEventListener("click", somar);
button2.addEventListener("click", diminuir);
