import React, { useState } from 'react';
import UIKit from './pages/UIKit';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
    const [showUIKit, setShowUIKit] = useState(false);
    const [formError, setFormError] = useState('');

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Simulate validation error
        setFormError('Lütfen geçerli bir e-posta adresi giriniz.');
    };

    return (
        <div className="min-h-screen bg-surface text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100 font-sans">
            {/* Skip link for keyboard users (accessibility) */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded-md font-bold text-sm outline-none ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-gray-950"
            >
                Ana içeriğe atla
            </a>

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800 transition-colors">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight text-primary dark:text-accent select-none">
                        Uğur Berktas<span className="text-gray-900 dark:text-white">.dev</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Button variant="ghost" size="sm" onClick={() => setShowUIKit(!showUIKit)} className="hidden sm:inline-flex">
                            {showUIKit ? 'Portföye Dön' : 'UI Kit Görüntüle'}
                        </Button>
                        {/* Mobile simplified toggle text */}
                        <Button variant="ghost" size="sm" onClick={() => setShowUIKit(!showUIKit)} className="sm:hidden text-xs px-2">
                            {showUIKit ? 'Portföy' : 'UI Kit'}
                        </Button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
                            aria-label="Temayı Değiştir"
                            title="Karanlık/Aydınlık Mod Seçimi"
                        >
                            {/* Moon Icon (visible in Light mode) */}
                            <span className="dark:hidden text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                            </span>
                            {/* Sun Icon (visible in Dark mode) */}
                            <span className="hidden dark:block text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                {showUIKit ? (
                    <UIKit />
                ) : (
                    <div className="space-y-24 md:space-y-32">

                        {/* 1. About / Hero Section */}
                        <section className="text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-4 md:pt-12">
                            <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1">
                                <div className="space-y-4">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                                        Merhaba, ben <span className="text-secondary dark:text-accent">Uğur</span> 👋
                                    </h1>
                                    <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                                        Fırat Üniversitesi <br className="hidden sm:block md:hidden" /> Yazılım Mühendisliği Öğrencisi
                                    </h2>
                                </div>

                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                                    Modern, erişilebilir ve performansı yüksek web uygulamaları geliştirme tutkusu olan genç bir geliştiriciyim.
                                    Sürekli öğreniyor ve ölçeklenebilir ürünler inşa etmeyi hedefliyorum.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                                    <a href="#contact" className="w-full sm:w-auto">
                                        <Button variant="primary" size="lg" className="w-full">
                                            Benimle İletişime Geç
                                        </Button>
                                    </a>
                                    <a href="#projects" className="w-full sm:w-auto">
                                        <Button variant="outlined" size="lg" className="w-full">
                                            Projelerimi İncele
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            {/* Optional Hero Image Placeholder */}
                            <div className="order-1 md:order-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0 bg-gradient-to-tr from-primary to-accent dark:from-secondary dark:to-accent rounded-full p-1 opacity-90 shadow-2xl relative overflow-hidden group">
                                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-95">
                                    <span className="text-8xl">🧑‍💻</span>
                                </div>
                            </div>
                        </section>

                        {/* 2. Projects Section */}
                        <section id="projects" className="scroll-mt-24">
                            <div className="mb-10 text-center md:text-left">
                                <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center justify-center md:justify-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-accent"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></svg>
                                    Öne Çıkan Projeler
                                </h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">Üzerinde çalıştığım ve geliştirdiğim iki temel proje.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                {/* Project 1: CampusHub */}
                                <Card variant="elevated" className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-transparent dark:hover:border-primary/30 group">
                                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 text-primary dark:text-blue-400 transform transition-transform group-hover:-translate-y-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                        </div>
                                        <div className="flex gap-2 flex-wrap mb-4">
                                            <span className="text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 px-2.5 py-1 rounded-full">SaaS</span>
                                            <span className="text-xs font-semibold bg-primary/10 text-primary dark:text-blue-300 px-2.5 py-1 rounded-full">Web App</span>
                                        </div>
                                        <h4 className="text-2xl font-bold mb-3 tracking-tight">CampusHub</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-8 flex-1 leading-relaxed">
                                            Üniversite topluluk yönetimi için geliştirilmiş kapsamlı bir SaaS platformu. Kulüp etkinlik planlama, üye ve bütçe takibi özellikleri sunarak öğrencilerin sosyalleşmesini ve organize olmasını sağlar.
                                        </p>
                                        <Button variant="ghost" className="self-start px-0 font-semibold hover:bg-transparent hover:text-primary dark:hover:bg-transparent dark:hover:text-primary group/btn -ml-2 p-2">
                                            Detayları İncele <span className="inline-block transition-transform group-hover/btn:translate-x-1 ml-1">→</span>
                                        </Button>
                                    </div>
                                </Card>

                                {/* Project 2: RailGuard */}
                                <Card variant="elevated" className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border border-transparent dark:hover:border-accent/30 group">
                                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                        <div className="w-14 h-14 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6 text-accent dark:text-purple-400 transform transition-transform group-hover:-translate-y-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
                                        </div>
                                        <div className="flex gap-2 flex-wrap mb-4">
                                            <span className="text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 px-2.5 py-1 rounded-full">IoT</span>
                                            <span className="text-xs font-semibold bg-accent/10 text-accent dark:text-purple-300 px-2.5 py-1 rounded-full">Endüstri 4.0</span>
                                        </div>
                                        <h4 className="text-2xl font-bold mb-3 tracking-tight">RailGuard</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-8 flex-1 leading-relaxed">
                                            Demiryolu makasları için IoT tabanlı yapay zeka destekli kestirimci bakım sistemi. Olası arızaları önceden tespit ederek tren kazalarını önler, bakım maliyetlerini düşürür ve raylı sistemlerin güvenliğini artırır.
                                        </p>
                                        <Button variant="ghost" className="self-start px-0 font-semibold hover:bg-transparent hover:text-accent dark:hover:bg-transparent dark:hover:text-accent group/btn -ml-2 p-2">
                                            Detayları İncele <span className="inline-block transition-transform group-hover/btn:translate-x-1 ml-1">→</span>
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </section>

                        {/* 3. Contact Section */}
                        <section id="contact" className="scroll-mt-24 pb-16">
                            <Card variant="outlined" className="max-w-2xl mx-auto border-gray-200 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="p-6 sm:p-10">
                                    <div className="text-center mb-10">
                                        <h3 className="text-3xl font-bold tracking-tight mb-3">İletişime Geçin</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg">Projeleriniz ve vizyonunuz hakkında konuşalım.</p>
                                    </div>

                                    <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                                            <Input
                                                id="name-input"
                                                label="Adınız Soyadınız"
                                                placeholder="Örn: Ahmet Yılmaz"
                                                required
                                            />
                                            <Input
                                                id="email-input"
                                                label="E-posta Adresiniz"
                                                type="email"
                                                placeholder="ornek@mail.com"
                                                error={formError}
                                                required
                                            />
                                        </div>

                                        <Input
                                            id="subject-input"
                                            label="Konu"
                                            placeholder="Size nasıl yardımcı olabilirim?"
                                        />

                                        <div className="space-y-1.5 flex flex-col">
                                            <label htmlFor="message-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Mesajınız
                                            </label>
                                            <textarea
                                                id="message-input"
                                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:ring-offset-gray-950 min-h-[120px] resize-y transition-colors"
                                                placeholder="Merhabalar..."
                                                required
                                                aria-invalid="false"
                                            ></textarea>
                                        </div>

                                        <div className="pt-2">
                                            <Button type="submit" variant="primary" size="lg" className="w-full text-base tracking-wide shadow-sm">
                                                Mesaj Gönder
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </Card>
                        </section>

                    </div>
                )}
            </main>

            {/* Footer */}
            {!showUIKit && (
                <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-white dark:bg-gray-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <p>© {new Date().getFullYear()} Uğur Berktas. Tüm hakları saklıdır.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">GitHub</a>
                            <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">Twitter</a>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default App;
