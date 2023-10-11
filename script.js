const betu = document.querySelectorAll(".betu");
const start = document.querySelector(".start");
const inputTime = document.querySelector(".inputTime");
const mpText = document.querySelector(".mpText");

const betuk = {
  elso: ["K", "T", "L", "É", "P", "E"],
  masodik: ["T", "N", "G", "Z", "E", "O"],
  harmadik: ["Y", "M", "A", "H", "I", "S"],
  negyedik: ["R", "É", "B", "Z", "I", "L"],
  otodik: ["F", "M", "E", "Y", "Ö", "A"],
  hatodik: ["O", "N", "K", "C", "T", "A"],
  hetedik: ["D", "Á", "Ü", "S", "E", "M"],
  nyolcadik: ["V", "J", "L", "A", "O", "S"],
  kilencedik: ["K", "G", "N", "U", "I", "Á"],
  tizedik: ["E", "L", "A", "R", "N", "T"],
};
function randomNumber() {
  const randInt = Math.floor(Math.random() * 6);

  return randInt;
}

start.addEventListener("click", function () {
  //start.classList.add("hide");
  start.textContent = inputTime.value;
  betu[0].textContent = betuk.elso[randomNumber()];
  betu[1].textContent = betuk.masodik[randomNumber()];
  betu[2].textContent = betuk.harmadik[randomNumber()];
  betu[3].textContent = betuk.negyedik[randomNumber()];
  betu[4].textContent = betuk.otodik[randomNumber()];
  betu[5].textContent = betuk.hatodik[randomNumber()];
  betu[6].textContent = betuk.hetedik[randomNumber()];
  betu[7].textContent = betuk.nyolcadik[randomNumber()];
  betu[8].textContent = betuk.kilencedik[randomNumber()];
  betu[9].textContent = betuk.tizedik[randomNumber()];
  inputTime.classList.add("hide");
  mpText.classList.add("hide");
  if (inputTime.value > 0) {
    makeIteration();
  } else {
    inputTime.value = 60;
    makeIteration();
  }

  //rotate();
});
function rotate() {
  betu.forEach((b) => b.classList.add("rotate"));
}

const makeIteration = () => {
  if (inputTime.value > 0) {
    start.textContent = inputTime.value;
    inputTime.value -= 1;
    setTimeout(makeIteration, 1000);
  } else {
    start.textContent = "Lejárt az idő";
    new Audio("alarm.mp3").play();
    setInterval(function () {
      location.reload();
    }, 3000);
  }
};
