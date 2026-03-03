# CSS Tasarım Kararları — LAB-3

## 1. Breakpoint Seçimi

| Breakpoint | Değer | Gerekçe |
|---|---|---|
| Mobil (varsayılan) | `< 640px` | Küçük ekranlar için temel stil; ek yükleme yok |
| Tablet | `min-width: 640px` | Yaygın küçük tablet / yatay telefon genişliği; içerik yan yana sığmaya başlar |
| Masaüstü | `min-width: 1024px` | Standart laptop genişliği; 3 sütunlu grid ve geniş padding anlamlı hale gelir |

640px ve 1024px, cihaz çeşitliliğinden bağımsız olarak **içeriğin bozulmaya başladığı** noktalara göre seçildi. Bu, cihaz odaklı değil içerik odaklı breakpoint yaklaşımıdır.

---

## 2. Layout Tercihleri

### Header → Flexbox
Header yalnızca **tek boyutlu** (yatay) bir düzen içerir: logo solda, navigasyon sağda. Flexbox `justify-content: space-between` ile bu tek satırlık hizalama için idealdir.

### Projeler → CSS Grid
Proje kartları **iki boyutlu** (satır + sütun) bir ızgara gerektirir. `repeat(auto-fit, minmax(280px, 1fr))` ile ekran genişliğine göre kart sayısı otomatik ayarlanır; masaüstünde zorunlu 3 sütun `repeat(3, 1fr)` ile sabitlenir. Grid, eşit yüksekli kart hizalamayı (`.project-card p { flex-grow: 1 }` ile birlikte) kolaylaştırır.

---

## 3. Design Tokens & Fluid Typography

### Design Tokens (`tokens.css`)
Tüm renkler, boşluklar, gölgeler ve geçişler merkezi bir `:root` bloğunda `var(--...)` değişkenleri olarak tanımlandı. Faydaları:

- **Tutarlılık**: Aynı değer tüm bileşenlerde garantili
- **Bakım kolaylığı**: Bir değer değişince tüm sayfaya yansır
- **Tematik esneklik**: Dark mode gibi temalar yalnızca token değerlerini değiştirerek uygulanabilir

### Fluid Typography (`clamp()`)
```css
--text-2xl: clamp(1.5rem, 1rem + 2vw, 2.5rem);
```
`clamp(min, tercih, max)` ile font boyutu viewport genişliğiyle yumuşakça büyür; sabit `px` değerleri ve fazladan media query gerekmez. Kullanıcı deneyimi her ekranda kesintisiz ölçeklenir.

---

## 4. Mobile-First Stratejisi

Stiller küçük ekran için varsayılan olarak yazıldı; daha geniş ekranlar `min-width` media query'leriyle **üzerine ekleme** yapılarak genişletildi.

**Performans katkısı:** Mobil cihazlar yalnızca kendi stillerini ayrıştırır, masaüstü kuralları okunmaz ve uygulanmaz. Bu, düşük bant genişliğindeki ve düşük işlem gücündeki cihazlarda **parse süresi ve render maliyetini** azaltır. İçerik önce işlevsel, sonra zenginleştirilmiş hale gelir (**progressive enhancement**).
