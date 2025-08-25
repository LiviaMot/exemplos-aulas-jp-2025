// AULA
// get
const elementH2 = document.getElementById("exemplo-h2");
elementH2.style.color = 'red';
//creatElement
const novaH1 = document.createElement('h1');
novaH1.textContent = "NOVO ELEMENTO H1 NA TELA";
console.log("novaH1 ==>",novaH1)

elementH2.appendChild(novaH1);

// addEventListener
const buttonExemploJS = document.getElementById('buttonExemploJS');
buttonExemploJS.addEventListener('click', () => {
  alert("Parabéns")
  // prompt("Digite um número:")
});

// botão submit
const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Batatata')
});

// Alerta quando passa o mouse em cima
const cabeca = document.getElementById("cabeca");
cabeca.addEventListener('mouseover', () => {
  // alert('ihh')
});

// keydown
document.addEventListener('keydown', (event) => {
  console.log(`Tecla clicada ${event.key}`)
});

// EXERCICIOS
// mudar cor do header
// const cabeca = document.getElementById("cabeca");
// cabeca.style.backgroundColor = 'purple';

// mudando a cor do footer
// const pe = document.getElementById("pe");
// pe.style.fontSize = "50px";

// DESAFIO
// Colocar um botão de adicionar que coloca um novo item
// Colocar um botão de adicionar que coloca um novo item com número começando do 4