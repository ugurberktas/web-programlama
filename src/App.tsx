import './App.css'

function App() {
  return (
    <>
      {/* Klavye kullanıcıları için içerik atlama bağlantısı */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* ── HEADER & NAVİGASYON ── */}
      <header>
        <div className="header-inner">
          <span className="logo-text">Uğur Berktaş</span>
          <nav aria-label="Ana navigasyon">
            <ul>
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ── ANA İÇERİK ── */}
      <main id="main-content">

        {/* ── HAKKIMDA ── */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>
          <div className="section-inner">
            <figure>
              <img
                src="/profile.jpg"
                alt="Uğur Berktaş profil fotoğrafı"
                width={160}
                height={160}
              />
              <figcaption>Uğur Berktaş — Web Geliştirici</figcaption>
            </figure>
            <p>
              Merhaba! Ben Uğur Berktaş. Web Tasarımı ve Programlama alanında
              kendini geliştiren, modern web teknolojilerine meraklı bir
              öğrenciyim.
            </p>
          </div>
        </section>

        {/* ── PROJELER ── */}
        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projeler</h2>
          <div className="projeler-grid">

            <article aria-labelledby="proje-reklegram">
              <h3 id="proje-reklegram">Reklegram</h3>
              <p className="proje-etiket">TÜSİAD Girişim Projesi</p>
              <p>
                Reklamcılık sektörüne yönelik yenilikçi bir dijital platform
                girişimi. TÜSİAD iş birliğiyle hayata geçirildi.
              </p>
            </article>

            <article aria-labelledby="proje-anchor">
              <h3 id="proje-anchor">ANCHOR</h3>
              <p className="proje-etiket">Garanti BBVA Projesi</p>
              <p>
                Garanti BBVA bünyesinde geliştirilen finansal teknoloji odaklı
                çözüm projesi.
              </p>
            </article>

          </div>
        </section>

        {/* ── İLETİŞİM ── */}
        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          <form noValidate aria-label="İletişim formu">

            {/* Ad Soyad */}
            <div className="form-group">
              <label htmlFor="ad-soyad">Ad Soyad <span aria-hidden="true">*</span></label>
              <input
                type="text"
                id="ad-soyad"
                name="adSoyad"
                required
                minLength={3}
                autoComplete="name"
                aria-describedby="ad-soyad-hata"
                placeholder="Adınızı ve soyadınızı girin"
              />
              <small id="ad-soyad-hata" role="alert" className="hata-mesaji">
                Lütfen en az 3 karakter girin.
              </small>
            </div>

            {/* E-posta */}
            <div className="form-group">
              <label htmlFor="eposta">E-posta <span aria-hidden="true">*</span></label>
              <input
                type="email"
                id="eposta"
                name="eposta"
                required
                autoComplete="email"
                aria-describedby="eposta-hata"
                placeholder="ornek@eposta.com"
              />
              <small id="eposta-hata" role="alert" className="hata-mesaji">
                Lütfen geçerli bir e-posta adresi girin.
              </small>
            </div>

            {/* Konu */}
            <div className="form-group">
              <label htmlFor="konu">Konu <span aria-hidden="true">*</span></label>
              <select
                id="konu"
                name="konu"
                required
                aria-describedby="konu-hata"
              >
                <option value="">-- Seçiniz --</option>
                <option value="isbirligi">İş Birliği</option>
                <option value="proje">Proje Teklifi</option>
                <option value="diger">Diğer</option>
              </select>
              <small id="konu-hata" role="alert" className="hata-mesaji">
                Lütfen bir konu seçin.
              </small>
            </div>

            {/* Mesaj */}
            <div className="form-group">
              <label htmlFor="mesaj">Mesaj <span aria-hidden="true">*</span></label>
              <textarea
                id="mesaj"
                name="mesaj"
                required
                minLength={10}
                rows={5}
                aria-describedby="mesaj-hata"
                placeholder="Mesajınızı buraya yazın..."
              />
              <small id="mesaj-hata" role="alert" className="hata-mesaji">
                Lütfen en az 10 karakter girin.
              </small>
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Uğur Berktaş. Tüm hakları saklıdır.
        </p>
      </footer>
    </>
  )
}

export default App
