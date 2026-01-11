const containerBtns = document.querySelector(".container-btns");
const startStopBtn = document.querySelector("#start-stop-btn");
const resetBtn = document.querySelector("#reset-btn");
const timeDisplay = document.querySelector("#time-display");
let saniye = 0;
let dakika = 0;
let salise = 0;
let timecycle = 0;

containerBtns.addEventListener("click", (e) => {
  const tiklanan = e.target.closest("button");
  if (!tiklanan) return;
  console.log(tiklanan);
  if (tiklanan == startStopBtn) {
    if (!timecycle) {
      startStopBtn.innerHTML = `<svg width="60" height="60" viewBox="0 0 20 20">
            <rect x="5" y="4" width="3" height="12" fill="rgb(11, 83, 11)" />
            <rect x="12" y="4" width="3" height="12" fill="rgb(11, 83, 11)" />
      </svg>`;

      timecycle = setInterval(() => {
        salise++;

        if (salise > 99) {
          
          saniye++; 
          salise = 0; 
        }

        if (saniye > 59) {
        
          dakika++;
          saniye = 0;
        }

        
        let gosterSalise = salise < 10 ? "0" + salise : salise;
        let gosterSaniye = saniye < 10 ? "0" + saniye : saniye;
        let gosterDakika = dakika < 10 ? "0" + dakika : dakika;

        
        timeDisplay.innerText = `${gosterDakika}:${gosterSaniye}:${gosterSalise}`;
      }, 10); 
    } else {
      clearInterval(timecycle);
      timecycle = 0;
      startStopBtn.innerHTML = `<svg width="60" height="60" viewBox="0 0 20 20"/>
            <polygon points="5,3 17,10 5,17" fill="black" <polygon/>
      </svg>`;
    }
  }
});

resetBtn.addEventListener("click", (e) => {
  const tiklanan = e.target.closest("button");
  if (!tiklanan) return;
  let sifirlaSalise = "00";
  let sifirlaSaniye = "00";
  let sifirlaDakika = "00";
  saniye = 0;
  salise = 0;
  dakika = 0;

  timeDisplay.innerText = `${sifirlaDakika}:${sifirlaSaniye}:${sifirlaSalise}`;

  clearInterval(timecycle);
});
