var gLtr = ["Q", "QS", "W", "WS", "E", "ES", "R", "RS", "T", "TS", "Y", "U",
  "I", "O", "OS", "P", "PS", "A", "S", "D", "F", "G", "H", "J", "K",
  "L", "Z", "X", "C", "V", "B", "N", "M"
];
var ltrChc = "";
var usrInp = "";
var gmStar = false;
var countTime = 300;
var tmrSp = 3000;
var counter;
var score = 0;

function nextLet() {
  var ran = Math.floor(Math.random() * gLtr.length);

  ltrChc = gLtr[ran];
  imgName = "BigWhite/" + ltrChc + ".png";

  document.getElementById('letterShow').src = imgName;
}

function checkLet() {
  if (gmStar === true) {
    usrInp = usrInp.toUpperCase();

    //SHOW WHAT USER ENTERS
    var arrayLength = gLtr.length;
    var imgInp;
    for (var i = 0; i < arrayLength; i++) {
      if (usrInp == gLtr[i]) {
        imgInp = "BigWhite/" + usrInp + ".png";
        document.getElementById('usrInput').src = imgInp;
      }
    }
    //END SHOW WHAT USER ENTERS

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
      timerSpeedUp();
      nextLet();
    }
    usrInp = "";
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

function timer() {

  countTime = countTime - 1;
  if (countTime < 0) {
    gmStar = false;
    console.log(gmStar);
    clearInterval(counter);
    return;
  }
  document.getElementById("timerShow").innerHTML = "Time: " + countTime;
}


function startGame() {
  if (gmStar === false) {
    scoreReset();
    gmStar = true;
    clearInterval(counter);
    countTime = 100;
    tmrSp = 1000;
    counter = setInterval(timer, tmrSp);
    gmStar = true;
    nextLet();
    $(document).keypress(function(e) {
      if (e.keyCode == e.keyCode && e.shiftKey ? 1 : 0)
        usrInp = String.fromCharCode(e.keyCode) + "S";
      else
        usrInp = String.fromCharCode(e.keyCode);
      checkLet();
    });
  }

}
