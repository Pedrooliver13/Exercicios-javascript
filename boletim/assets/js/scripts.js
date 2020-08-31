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
  let boletim = [];

  function insertNotesValues() {
    let note = document.querySelector("#note");

    if (note.value == "") {
      alert("informe sua NOTA");
      note.focus();

      return;
    }

    let li = document.createElement("li");
    boletim.push(note.value);

    boletim.forEach((item, index) => {
      li.innerHTML = `Nota ${index + 1}º: <span class="green">${item}</span>`;

      insertElementsHtml(li);
    });

    return;
  }

  function insertElementsHtml(item) {
    let content = document.querySelector(".js-results");

    content.querySelector('.js-results-content').classList.add("js-ativo");
    content.querySelector('.js-results-content').appendChild(item);

    return;
  }

  function removeElements() {
    const ul = document.querySelector(".js-results-content");
    const arrayChildrens = Array.from(ul.children);

    if (arrayChildrens.length)
      arrayChildrens.forEach((item) => {
        ul.classList.remove('js-ativo');
        ul.removeChild(item);
        boletim.pop(item);
      });

    return
  }

  function handleBoletimValues(event) {
    event.preventDefault();

    if (boletim.length < 2) {
      alert("Adicione pelo menos 2 notas");
      note.focus();

      return;
    }

    let total = 0;

    boletim.forEach((item) => {
      total += Number(item);
    });

    const media = (total / boletim.length).toFixed(1);
    const passed = media >= 5 ? "Passou" : "Retido";

    let li = document.createElement("li");
    li.innerHTML = `
    <li>Média <span class="green">${media}</span></li>
    <li>Resultado: <span class="green">${passed}</span></li>
  `;

    insertElementsHtml(li);

    return;
  }

  // valor total;
  const form = document.querySelector(".js-form");
  form.addEventListener("submit", handleBoletimValues);

  // add note;
  let buttonAdd = document.querySelector(".js-button-add");
  buttonAdd.addEventListener("click", insertNotesValues);

  let buttonRemove = document.querySelector(".js-button-remove");
  buttonRemove.addEventListener("click", removeElements);
}

initBoletim();
