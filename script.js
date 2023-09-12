function buttonSortear() {
  const left = document.querySelector("#left").value;
  const right = document.querySelector("#right").value;
  const paragraph = document.querySelector("p");

  const mathLeft = Math.floor(left);
  const mathRight = Math.ceil(right);

  const result = Math.floor(
    Math.random() * (mathRight - mathLeft + 1) + mathLeft
  );

  paragraph.innerHTML = result;

  if (left === "" && right === "") {
    alert("Nenhum número foi encontrado.");
    paragraph.innerHTML = " ";
  } else if (left === "") {
    alert("Está faltando um número para preencher.");
    paragraph.innerHTML = " ";
  } else if (right === "") {
    alert("Está faltando um número para preencher.");
    paragraph.innerHTML = " ";
  }
}
