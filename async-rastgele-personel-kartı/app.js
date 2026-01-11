const kisiGetir = async () => {
    try {

        const response = await fetch("https://randomuser.me/api/")
        if(!response.ok){
            throw new Error("Veri Çekilemedş")
        }
        const data= await response.json()
        console.log(data);
        const kisi = data.results[0]
       const kart=document.createElement("div")
       kart.style.width="18rem"
       kart.innerHTML=`
       <img src="${kisi.picture.large}" class="card-img-top" alt="Personel Foto">
      <div class="card-body text-center">
        <h5 class="card-title">${kisi.name.first} ${kisi.name.last}</h5>
        <p class="card-text text-muted">${kisi.email}</p>
        <p class="card-text">Ülke: ${kisi.location.country}</p>
        <a href="mailto:${kisi.email}" class="btn btn-primary">Mail Gönder</a>
      </div>`

      const section=document.querySelector("section")
      section.appendChild(kart)

        
        
    } catch (error) {
        console.log("Hata oluştu:", error);
    document.querySelector("section").innerHTML = `
        <div class="alert alert-danger text-center">Hata: ${error.message}</div>
    `;
        
    }

}







kisiGetir()

// Callback kullanan fonksiyonlar
function kullaniciBilgisiGetir(kullaniciId, callback) {
    setTimeout(() => {
        console.log("1. Kullanıcı bilgisi alındı");
        callback(null, { id: kullaniciId, isim: "Ahmet" });
    }, 1000);
}
function siparisGetir(kullaniciId, callback) {
    setTimeout(() => {
        console.log("2. Siparişler alındı");
        callback(null, [101, 102, 103]); // Sipariş ID'leri
    }, 1000);
}
function siparisDetayGetir(siparisId, callback) {
    setTimeout(() => {
        console.log(`3. Sipariş ${siparisId} detayı alındı`);
        callback(null, { id: siparisId, tutar: 150 });
    }, 1000);
}
// KULLANIM - İÇ İÇE CALLBACK'LER (CALLBACK HELL)
kullaniciBilgisiGetir(1, function(hata, kullanici) {
    if (hata) {
        console.log("Hata:", hata);
        return;
    }
    console.log("Kullanıcı:", kullanici.isim);
    siparisGetir(kullanici.id, function(hata, siparisler) {
        if (hata) {
            console.log("Hata:", hata);
            return;
        }
        console.log("Sipariş sayısı:", siparisler.length);
        // Her sipariş için detay al
        siparisDetayGetir(siparisler[0], function(hata, detay1) {
            if (hata) {
                console.log("Hata:", hata);
                return;
            }
            siparisDetayGetir(siparisler[1], function(hata, detay2) {
                if (hata) {
                    console.log("Hata:", hata);
                    return;
                }
                siparisDetayGetir(siparisler[2], function(hata, detay3) {
                    if (hata) {
                        console.log("Hata:", hata);
                        return;
                    }
                    const toplamTutar = detay1.tutar + detay2.tutar + detay3.tutar;
                    console.log(":white_tick: Toplam Tutar:", toplamTutar);
                    // Kod sağa doğru piramit gibi büyüdü!
                });
            });
        });
    });
});