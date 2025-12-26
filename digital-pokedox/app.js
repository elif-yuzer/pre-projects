const girilenInput = document.getElementById("poke-input");
const searchBtn = document.querySelector("#search-btn");
const pokeResult = document.getElementById("poke-result");
const PokemonCard=document.querySelector(".pokemon-card")

const veriCek = async (isim) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${isim.toLowerCase()}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const resimSrc = data.sprites.other.dream_world.front_default || data.sprites.front_default;
    const tur = data.types[0].type.name;
    pokeResult.innerHTML = `
        <div class="pokemon-card theme">
            <img class="poke-img" src="${resimSrc}" alt="${data.name}" />
            <div class="poke-info">
                <h3>${data.name}</h3>
                <span class="badge">${tur}</span>
            </div>
        </div>
    `;

  } catch (error) {
    console.log(error);
    alert(error.message);
    pokeResult.innerHTML = "";
  }
};

searchBtn.addEventListener("click", () => {
  const girilenDeger = girilenInput.value;
  console.log(girilenDeger);
  if (girilenDeger !== "") {
    veriCek(girilenDeger);
  } else {
    alert("Lütfen birisim girin");
  }
});

girilenInput.addEventListener("keydown",(e)=>{
    if(e.key=="Enter" ){
        searchBtn.click()
    }

})

const themeCharacter= ()=>{
    if(tur.name=="fire"){
        PokemonCard.classList.add("theme-fire")


    }else if (tur.name=="grass"){
        PokemonCard.classList.add("theme-grass")

    }else if(tur.name=="water"){
          PokemonCard.classList.add("theme-water")
    }
}