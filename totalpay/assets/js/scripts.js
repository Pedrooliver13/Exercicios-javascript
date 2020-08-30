// Elabore um progama que leia um número. Calcule e informe os seus vizinhos , ou seja m o número anterior e posterior.
function initChoiceNumber() {
  const numbers = [];

  function handleChoiceNumber(num) {
    const previousNumber = Number(num - 1);
    const nextNumber = Number(num + 1);

    numbers.push(nextNumber, num, previousNumber);

    return console.log(`${previousNumber} ${num}  ${nextNumber}`);
  }
  handleChoiceNumber(100); // escolha seu numero;

  console.log(numbers.sort((a, b) => a - b)); // sort => ordena os dados, passamos a function para ele fazer em ordem crescente;
}

// Elabora um programa para uma pizzaria , o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor  a ser pago por cliente.

function initTotalPay() {
  const form = document.querySelector(".js-form");


  function getElement(seletor) {
    return document.querySelector(seletor);
  }
  
  function handleTotalToPay(event) {
    event.preventDefault();
    
    const totalValues = getElement("#totalValue").value;
    const totalClients = getElement("#clients").value;


    const valueClient = Number(
      totalValues / totalClients
    ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    let html = `
    <div class="title">Resultado:</div>
    <ul class="results__content">
      <li>Total a ser pago por cliente é: <span class="green">${valueClient}</span></li>
    </ul>
    `;

    const listResults = getElement(".js-results");

    return (listResults.innerHTML = html);
  }

  form.addEventListener("submit", handleTotalToPay);
}

initTotalPay();
