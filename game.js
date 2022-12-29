// declaration of variables for classes

const Buttons = document.querySelectorAll(".clickbuttons");

const Clear = document.querySelector(".dellbutton");
const checkCode = document.querySelector(".Okbutton");

let codebox = document.querySelector(".codebox");

let Life = document.querySelectorAll(".lifebulb");

let signalBulb = document.querySelectorAll(".hintbulb");
let gameOver = document.querySelector(".game_over");
let lifecount = 0;
// giving Button class click effects

for (let i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener("click", function () {
    codelength = codebox.value.length;
    if (codelength <= 3) {
      document.querySelector(".codebox").value += i;
    }
  });
}
// The clear eventlistener
Clear.addEventListener("click", function () {
  codebox.value = "";
});

let codebank = [1, 0, 6, 9, 4, 3, 8, 7, 5, 2];
let gamelife = 0;
let secretcode = "";
let code = codebox.value;
codebank.reverse();

for (let i = 1; i < 7; i++) {
  codebank.splice(-Math.floor(Math.random() * 7), 1);
}

for (i of codebank) {
  secretcode += i;
}

Number(secretcode);

const Reset = () => {
  codebank = [1, 0, 6, 9, 4, 3, 8, 7, 5, 2];
  gamelife = 0;
  secretcode = "";
  code = codebox.value;
  codebank.reverse();

  for (let i = 1; i < 7; i++) {
    codebank.splice(-Math.floor(Math.random() * 7), 1);
  }

  for (i of codebank) {
    secretcode += i;
  }

  Number(secretcode);
};

//functio for checking the inputs
const Checker = (x) => {
  let position = codearray.indexOf(x);
  let cposition = secretcode.indexOf(x);

  for (items of codebank) {
    if (x !== items) {
      signalBulb[position].style.backgroundColor = "white";
    }
  }

  for (items of codebank) {
    if (x == items) {
      signalBulb[position].style.backgroundColor = "blue";
    }
  }
  if (position == cposition) {
    signalBulb[position].style.backgroundColor = "yellow";
  }
};

//adding an eventlistener to the OK button for the implementation of the input check;

const codefunc = function () {
  code = codebox.value;
  codearray = [];
  console.log(code.length);
  for (let i = 0; i < 4; i++) {
    codearray.push(code[i]);
    Checker(code[i]);
  }

  lifecount += 1;

  for (let i = 0; i < lifecount; i++) {
    Life[i].style.backgroundColor = "red";
  }

  if (code == secretcode) {
    document.querySelector(".rocket").style.animation =
      "rocketlaunch 5s ease-in-out alternate";

    document.querySelector(".rocket-fire").style.display = "block";
  } else {
  }

  if (lifecount == 4) {
    gameOver.innerHTML = 'GAME OVER';
    gameOver.classList.add('hidden')
  }

  console.log(codearray);
  console.log(code.charAt(1));
}

window.addEventListener('resize',codefunc);
checkCode.addEventListener("click",codefunc);

console.log(codebank);
console.log(secretcode);
console.log("1238".charAt(3));


console.log(this)