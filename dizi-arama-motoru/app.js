const searchBtn = document.querySelector("#add-data-btn");
const searchInput = document.querySelector("#episode-input");
const resultSection = document.querySelector("#result-info");

const veriGetir = async (id) => {
  try {
    const url = `https://api.tvmaze.com/shows/${id}/episodes`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Dizi Bulunamadı");
    }

    const data = await response.json();
    console.log(data);

    // Başlık
    resultSection.innerHTML = `<h3 style="margin: 10px;">Toplam: ${data.length} Bölüm</h3>`;

    // Döngü
    data.forEach((bolum) => {
      // Resim Kontrolü
      const resim = bolum.image ? bolum.image.medium : "https://via.placeholder.com/210x295";

      // --- DÜZELTİLMİŞ HTML ŞABLONU ---
      resultSection.innerHTML+=`
      <div class="episode-card">
      <img class="episode-img" src="${resim}" alt="${bolum.name}" />
      <div class="episode-content">
      <h4 style:margin:0 0 5px 0 color:"$4f46e5>${bolum.name}</h4>
      <p style="font-size:.9rem color:#6b7280 margin-bottom:5px">${bolum.season} | Bölüm: ${bolum.number}</p>
      <div style="font-size: 0.85rem; color: #374151; line-height: 1.4;">
                    ${bolum.summary || "Özet yok."}
                </div>
      </div>
      </div>
      `
    });

    resultSection.style.display = "block";

  } catch (error) {
    console.log(error); // Hatayı konsolda görelim
    resultSection.innerHTML = `<p style="color:red; padding:10px;">Hata: ${error.message}</p>`;
    resultSection.style.display = "block";
  }
};

searchBtn.addEventListener("click", () => {
  const girilenDeger = searchInput.value;
  console.log(girilenDeger);

  if (girilenDeger !== "") {
    veriGetir(girilenDeger);
    // İsteğe bağlı: Butona basınca inputu temizleyelim
    searchInput.value = ""; 
  } else {
    alert("Lütfen bir sayı gir");
  }
});