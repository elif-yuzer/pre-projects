# 🥗 The Meal App - Lezzetli Yemekler Dünyası

Bu proje, **TheMealDB API** kullanılarak geliştirilmiş, kullanıcıların dünya mutfağından yemekleri arayabileceği ve kategorilere göre filtreleyebileceği modern bir web uygulamasıdır.


## 🚀 Özellikler

- **Anlık Arama:** Arama çubuğuna yazılan harflere göre (Client-side filtering) yemekleri anında filtreler.
- **Ülke Filtrelemesi:** Bayraklara tıklayarak o ülkenin mutfağına ait yemekleri listeler (Event Delegation yöntemi ile).
- **Responsive Tasarım:** CSS Grid (`minmax`, `auto-fit`) kullanılarak mobilden masaüstüne kusursuz görünüm sağlar.
- **Modern CSS:** `@layer` yapısı ile düzenli ve yönetilebilir stil dosyası.
- **Dinamik DOM:** JavaScript ile API'den gelen verilerin dinamik olarak ekrana basılması.

## 🛠️ Kullanılan Teknolojiler

- **HTML5:** Semantik etiket yapısı.
- **CSS3:** - CSS Grid & Flexbox
  - CSS Layers (`@layer reset, base, components`)
  - `clamp()` ile responsive tipografi.
  - Hover efektleri ve geçişler (transitions).
- **JavaScript (ES6+):**
  - `fetch` API ve `async/await` yapısı.
  - DOM Manipülasyonu.
  - Array metodları (`filter`, `forEach`).
  - Event Listeners & Event Delegation.

## 📂 Proje Yapısı

```bash
├── index.html      # Ana HTML yapısı
├── style.css       # Tüm stil kodları (Grid, Layers)
├── app.js          # API bağlantısı ve etkileşim mantığı
├── images/         # Bayraklar ve statik görseller
└── README.md       # Proje dokümantasyonu