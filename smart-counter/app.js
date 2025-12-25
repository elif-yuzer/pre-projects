const addBtn = document.getElementById("add-btn");
const removeBtn = document.querySelector("#remove-btn");
const sayiKutusu = document.getElementById("sayi-kutusu");
const btnContainer=document.querySelector(".btn-container")

let sayi = JSON.parse(localStorage.getItem("counter")) || 0;

sayiKutusu.innerText = sayi;

const guncelle = (miktar) => {
  sayi += miktar;
  if (sayi < 0) {
    sayi = 0;
  }
  sayiKutusu.innerText = sayi;
  if (sayi >= 5) {
    sayiKutusu.style.color = "red";
  } else if (sayi < 10) {
    sayiKutusu.style.color = "green";
  }
  localStorage.setItem("counter", JSON.stringify(sayi));
};
addBtn.addEventListener("click", () => guncelle(1));

removeBtn.addEventListener("click", () => guncelle(-1));

btnContainer.addEventListener("click",(e)=>{
    const tiklanan=e.target
   if(tiklanan==btnContainer){
    sayi=0
    sayiKutusu.innerText=0
    localStorage.setItem("counter",JSON.stringify(sayi))
   }
})