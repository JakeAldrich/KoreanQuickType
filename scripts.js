var gLtr = ["Q", "QS", "W", "WS", "E", "ES", "R", "RS", "T", "TS", "Y", "U",
  "I", "O", "OS", "P", "PS", "A", "S", "D", "F", "G", "H", "J", "K",
  "L", "Z", "X", "C", "V", "B", "N", "M"
];
let ltrList = [];
var cont = true;
var ltrChc = "";
var usrInp = "";
var gameStart = false;
var countTime;
var tmrSp = 3000;
var counter;
var score;

document.addEventListener("keypress", function(event) {
  if (cont == true) {
    console.log("log");
    usrInp = String.fromCharCode(event.keyCode);
    if (usrInp == 'Q')
      usrInp = 'qs';
    else if (usrInp == 'W')
      usrInp = 'ws';
    else if (usrInp == 'E')
      usrInp = 'es';
    else if (usrInp == 'R')
      usrInp = 'rs';
    else if (usrInp == 'T')
      usrInp = 'ts';
    else if (usrInp == 'O')
      usrInp = 'os';
    else if (usrInp == 'P')
      usrInp = 'ps';
    usrInp = usrInp.toUpperCase();
    if (gameStart === true) {
      checkLet();
    }
  }
})

function nextLet() {
  letterListReset();
  cont = true;
  var ran = Math.floor(Math.random() * gLtr.length);
  ltrChc = gLtr[ran];

  document.getElementById('letterShow').src = "BigWhite/" + ltrChc + ".png";
}

function checkLet() {
  if (gameStart === true) {
    if (!gLtr.includes(usrInp)) {
      return;
    }

    if (ltrList.length < 10) {
      ltrList.push(usrInp);
      document.getElementById('userLetters').innerHTML = ltrList;
    } else {
      ltrList.shift();
      ltrList.push(usrInp.toString());
      document.getElementById('userLetters').innerHTML = ltrList;
    }

    if (usrInp == ltrChc) {
      if (countTime < 95) {
        score = score + 5;
      } else {
        score = score + 5;
        countTime = 101;
      }
    }
    if (usrInp == ltrChc) {
      document.getElementsByClassName("score")[0].innerHTML = "SCORE: " + score;
      document.getElementById('letterShow').src = "BigBlue/" + usrInp + ".png";
      document.getElementById('usrInput').src = "BigBlue/" + usrInp + ".png";
      cont = false;
      window.setTimeout(nextLet, 800);
      timerSpeedUp();
    } else {
      document.getElementById('usrInput').src = "BigRed/" + usrInp + ".png";
    }

  }
}

function scoreReset() {
  score = 0;
  document.getElementsByClassName("score")[0].innerHTML = "SCORE: " + score;
}

function timerSpeedUp() {
  clearInterval(counter);
  countTime = countTime + 5;
  tmrSp = tmrSp * 1;
  counter = setInterval(timer, tmrSp);
}

function timerReset() {
  clearInterval(counter);
  countTime = 100;
  tmrSp = 1000;
  counter = setInterval(timer, tmrSp);
}

function letterListReset() {
  ltrList = [];
  document.getElementById('userLetters').innerHTML = ltrList;
}

function timer() {
  countTime = countTime - 1;
  if (countTime < 0) {
    gameStart = false;
    clearInterval(counter);
    return;
  }
  document.getElementById("timerShow").innerHTML = "Time: " + countTime;
}

function startGame() {
  gameStart = true;
  letterListReset();
  scoreReset();
  timerReset();
  nextLet();
}
