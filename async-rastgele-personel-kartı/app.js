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