// Elabore um programa para uma loja , o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para o pagemento á vista com 10% de desconto e o valor em 3x;
function initDiscount() {
  function getElements(seletor) {
    return document.querySelector(seletor);
  }

  function getCashValue(seletor) {
    return seletor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function handleNumberValues(event) {
    event.preventDefault();

    const fullPrice = getElements("#fullPrice").value;
    const inCashValue = getCashValue(Number(fullPrice - fullPrice * 0.1));
    const valueParceled = getCashValue(Number(fullPrice / 3));

    let html = `
    <div class="title">Resultado:</div>
    <ul class="results__content">
      <li>Valor á vista: <span class="green">${inCashValue}</span></li>
      <li>Valor em 3x: <span class="green">${valueParceled}</span></li>
    </ul>
  `;

    let content = getElements(".js-results");

    return (content.innerHTML = html);
  }

  const form = getElements(".js-form");
  form.addEventListener("submit", handleNumberValues);
}

initDiscount();