let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const newgame = document.querySelector("#new");

const resetgame = () => {
  userscore = 0;
  userscorepara.innerText = "0";

  compscore = 0;
  compscorepara.innerText = "0";

  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#2a9d8f";
};

newgame.addEventListener("click", resetgame);

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  console.log("Game is Draw");
  msg.innerText = "Game is Draw";
  msg.style.backgroundColor = "#3c6c66";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `Computer Win! ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  const compchoice = gencompchoice();
  console.log("computer choice : ", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
