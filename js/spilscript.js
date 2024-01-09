window.addEventListener("load", showTitle);

let point;
let liv;

function showTitle() {
  console.log("showTitle");
  hideAllScreens();

  document.querySelector("#start").classList.remove("hide");

  document.querySelector("#play").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");

  hideAllScreens();


  point = 0;
  liv = 5;

  document.querySelector("#sand").classList.add("timer");

  document.querySelector("#sand").addEventListener("animationend", endGame);

  document.querySelector("#mine_points").textContent = point;
  document.querySelector("#mine_liv").textContent = liv;

  
  document.querySelector("#devil_container").classList.add("hop");
  let rnd = generateRandomNumber(10);
  document.querySelector("#devil_container").classList.add("pos" + rnd);
  rnd = generateRandomNumber(3);
  document.querySelector("#devil_container").classList.add("speed" + rnd);

  document.querySelector("#pindsvin_container").classList.add("fald");
  rnd = generateRandomNumber(5);
  document.querySelector("#pindsvin_container").classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#pindsvin_container").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document.querySelector("#pindsvin_container").classList.add("delay" + rnd);

  
  document.querySelector("#devil_container").addEventListener("click", clickDevil);

  document.querySelector("#pindsvin_container").addEventListener("click", clickPindsvin);


  document.querySelector("#devil_container").addEventListener("animationiteration", resetDevil);

  document.querySelector("#pindsvin_container").addEventListener("animationiteration", resetPindsvin);
}

function clickDevil() {
  console.log("clickDevil");

  document.querySelector("#devil_container").removeEventListener("click", clickDevil);

  point = point + 1;

  document.querySelector("#mine_points").textContent = point;

  document.querySelector("#devil_container").classList.add("frys");

  document.querySelector("#devil_sprite").classList.add("forsvind");

  document.querySelector("#devil_container").addEventListener("animationend", resetDevil);
}

function clickPindsvin() {
  console.log("clickPindsvin");


  document.querySelector("pindsvin_container").removeEventListener("click", clickPindsvin);

 


  liv = liv - 1;

 
  document.querySelector("#mine_liv").textContent = liv;

  if (liv <= 0) {
    endGame();
  }


  document.querySelector("#pindsvin_container").classList.add("frys");

  document.querySelector("#pindsvin_sprite").classList.add("forsvind");

  document.querySelector("#pindsvin_container").addEventListener("animationend", resetPindsvin);
}

function resetDevil() {
  console.log("DevilReset");

  document.querySelector("#devil_container").classList = "";
  
  document.querySelector("#devil_sprite").classList = "";
  document.querySelector("#devil_container").offsetHeight;


  document.querySelector("#devil_container").classList.add("hop");

  let rnd = generateRandomNumber(10);
  document.querySelector("#devil_container").classList.add("pos" + rnd);
  
  rnd = generateRandomNumber(3);
  document.querySelector("#devil_container").classList.add("speed" + rnd);

 
  document.querySelector("#devil_container").addEventListener("click", clickDevil);
}

function resetPindsvin() {
  console.log("PindsvinReset");


  document.querySelector("#pindsvin_container").classList = "";
 
  document.querySelector("#pindsvin_sprite").classList = "";


  let rnd = generateRandomNumber(5);
  document.querySelector("#pindsvin_container").classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#pindsvin_container").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document.querySelector("#pindsvin_container").classList.add("delay" + rnd);

  document.querySelector("#pindsvin_container").offsetHeight;
  document.querySelector("#pindsvin_container").classList.add("fald");

  document.querySelector("#pindsvin_container").addEventListener("click", clickPindsvin);
}

function endGame() {
  console.log("endGame");

  document.querySelector("#devil_container").classList.remove("hop");
  document.querySelector("#pindsvin_container").classList.remove("fald");

  document.querySelector("#devil_container").removeEventListener("click", clickDevil);
  document.querySelector("#pindsvin_container").removeEventListener("click", clickPindsvin);

  document.querySelector("#devil_container").removeEventListener("animationiteration", resetDevil);

  document.querySelector("#pindsvin_container").removeEventListener("animationiteration", resetPindsvin);

  document.querySelector("#devil_container").removeEventListener("animationend", resetDevil);
  document.querySelector("#pindsvin_container").removeEventListener("animationend", resetPindsvin);

  document.querySelector("#devil_container").removeEventListener("click", clickDevil);
  document.querySelector("#pindsvin_container").removeEventListener("click", clickPindsvin);

  if (liv <= 0) {
    gameOver();
  } else if (point >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("gameOver");


  document.querySelector("#sand").classList.remove("timer");


  document.querySelector("#sand").removeEventListener("animationend", endGame);

  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");

  document.querySelector("#play_again_1").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("levelComplete");


  document.querySelector("#sand").classList.remove("timer");


  document.querySelector("#sand").removeEventListener("animationend", endGame);

  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");

  document.querySelector("#play_again_2").addEventListener("click", startGame);
}

function generateRandomNumber(num) {
  let rndNumber = Math.random();
  rndNumber = rndNumber * num;
  rndNumber = Math.floor(rndNumber);
  rndNumber = rndNumber + 1;

  return rndNumber;


}

function hideAllScreens() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}
