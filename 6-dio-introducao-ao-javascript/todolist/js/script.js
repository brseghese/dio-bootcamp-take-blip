let inputTarefa = document.getElementById("tarefa");
let labelTarefa = document.getElementById("container-tarefa");
let listaTarefas = new Array();

function adicionarTarefa() {
  let tarefa = inputTarefa.value;

  if (inputTarefa.value != " " && inputTarefa.value != "") {
    listaTarefas.push(
      `<input type="checkbox" name="novaTarefa" id="novaTarefa" class="novaTarefa">
    <label for="novaTarefa">${tarefa}</label></br>`
    );
  }

  if (listaTarefas.length !== 0) {
    labelTarefa.classList.add("borda");
  }

  labelTarefa.innerHTML = listaTarefas.join("");
  inputTarefa.value = " ";
  inputTarefa.focus();
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector("#submit");
    btn.click();
  }
});
