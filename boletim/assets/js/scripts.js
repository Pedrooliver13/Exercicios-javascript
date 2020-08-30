// Elabore um programa que lia 2 notas de um aluno em uma disciplina.
// Calcule e informe a média das notas;
const handleMask = {
  apply(input, func) {
    setTimeout(() => {
      input.value = handleMask[func](input.value);
    }, 1);
  },
  name(value) {
    return value.replace(/\d/g, "");
  },
  note(value) {
    if (value > 10) {
      alert("Valor Maximo é DEZ");

      return (value = "");
    }

    return value;
  },
};

function initBoletim() {
  function handleBoletim(event) {
    event.preventDefault();

    this.getElement = (seletor) => document.querySelector(seletor);

    let name = this.getElement("#name").value,
      note1 = +this.getElement("#note1").value,
      note2 = +this.getElement("#note2").value;

    const media = (note1 + note2) / 2;
    const passed = media >= 5 ? "Passou" : "Retido";

    let html = `
    <div class="title">Olá <span class="green">${name}</span>, sua nota é:</div>
    <ul class="results__content">
      <li>Nota final: <span class="green">${media}</span></li>
      <li>Resultado: <span class="green">${passed}</span></li>
    </ul>
  `;

    const content = this.getElement(".js-results");

    return (content.innerHTML = html);
  }

  const form = document.querySelector(".js-form");
  form.addEventListener("submit", handleBoletim);
}

initBoletim();