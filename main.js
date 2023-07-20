// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const inputNumber = document.querySelector("#inputNumber");
const message = document.querySelector(".message");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e){
  if(e.key == 'Enter' && screen1.classList.contains("hide")){
    // console.log(e.key);
    handleResetClick();
  }
})

// Função callback
function handleTryClick(event){
  event.preventDefault();
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen();

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`;
  } 
  else if(Number(inputNumber.value) == '' || Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
    message.innerHTML = "Escolha um número de 0 a 10";
  } else{
    xAttempts++
    message.innerHTML = "Tente novamente";
  }

  message.classList.remove("hide");
  inputNumber.value = "";
}

function handleResetClick(){
  toggleScreen();
  message.classList.add("hide");
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

