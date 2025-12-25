const card = document.querySelector(".card");
const btnContainer = document.querySelector(".btn-container");
const moodText = document.querySelector("#mood");
const beHappy = document.getElementById("beHappy");
const beSad = document.getElementById("beSad");

let ruhHali = JSON.parse(localStorage.getItem("kayitliruhHali")) || "notr";

const guncelle = () => {
  if (ruhHali == "Happy") {
    moodText.innerText = "😊";
    card.style.backgroundColor = "gold";
  } else if (ruhHali == "Sad") {
    moodText.innerText = "😞";
    card.style.backgroundColor = "gray";
  } else {
    moodText.innerText = "😐";
    card.style.backgroundColor = "white";
  }
};
guncelle();

const moodGuncelle = (yeniMood) => {
  ruhHali = yeniMood;
  guncelle();
  localStorage.setItem("kayitliruhHali", JSON.stringify(ruhHali));
};

beHappy.addEventListener("click", () => {
  moodGuncelle("Happy");
});
beSad.addEventListener("click", () => {
  moodGuncelle("Sad");
});

btnContainer.addEventListener("click", (e) => {
  const tiklanan = e.target;
  if (tiklanan === btnContainer) {
    moodGuncelle("notr");
  }
});
