import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

const UIKit = () => {
    return (
        <div className="p-8 space-y-12">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight mb-2">UI Elements Kit</h1>
                <p className="text-gray-600 dark:text-gray-400">Tüm bileşenler ve varyantları ("sm", "md", "lg", "primary", "secondary" vs.) aşağıda sergilenmektedir.</p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 dark:border-gray-800">1. Buttons</h2>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Varyantlar</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Boyutlar</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="primary" size="sm">Small</Button>
                        <Button variant="primary" size="md">Medium</Button>
                        <Button variant="primary" size="lg">Large</Button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Durumlar</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="primary" disabled>Disabled Primary</Button>
                        <Button variant="danger" disabled>Disabled Danger</Button>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 dark:border-gray-800">2. Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input
                        label="Standart Input"
                        placeholder="Metin giriniz..."
                    />
                    <Input
                        label="Yardımcı Metinli Input"
                        placeholder="Metin giriniz..."
                        helpText="Bu alan için bir ipucu metni."
                    />
                    <Input
                        label="Hatalı Input"
                        placeholder="Hatalı değer..."
                        error="Bu alan zorunludur ve geçerli bir değer girilmelidir."
                        defaultValue="Yanlış format"
                    />
                    <div className="flex items-end">
                        <Button variant="secondary" className="w-full">Gönder</Button>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 dark:border-gray-800">3. Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card variant="elevated" className="p-6">
                        <h3 className="font-bold text-lg mb-2">Elevated Card</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Geyik gölgeli (shadow-md) ve arka planlı kart tasarımı. İçeriklerinizi öne çıkarmak için idealdir.</p>
                    </Card>
                    <Card variant="outlined" className="p-6">
                        <h3 className="font-bold text-lg mb-2">Outlined Card</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Kenarlıklı ve gölgesiz minimal kart tasarımı. Daha sade ve temiz listelemeler için kullanılır.</p>
                    </Card>
                    <Card variant="filled" className="p-6">
                        <h3 className="font-bold text-lg mb-2">Filled Card</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Hafif arka plan rengine sahip, sınır çizgisi olmayan kart tasarımı. Modern ve yenilikçi durur.</p>
                    </Card>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 dark:border-gray-800">4. Alerts</h2>
                <div className="space-y-4 max-w-2xl">
                    <Alert variant="info" dismissible>
                        <strong>Bilgi:</strong> Sistem yarın saat 03:00'te bakıma alınacaktır.
                    </Alert>
                    <Alert variant="success" dismissible>
                        <strong>Başarılı:</strong> Değişiklikleriniz başarıyla kaydedildi.
                    </Alert>
                    <Alert variant="warning" dismissible>
                        <strong>Uyarı:</strong> Şifrenizin süresi 2 gün sonra dolacaktır.
                    </Alert>
                    <Alert variant="error" dismissible>
                        <strong>Hata:</strong> Sunucuya bağlanırken bir sorun oluştu. Lütfen tekrar deneyin.
                    </Alert>
                    <Alert variant="info">
                        Bu alert dismissible (kapatılabilir) değildir. Kalıcı bir mesaj göstermek için kullanılır.
                    </Alert>
                </div>
            </section>
        </div>
    );
};

export default UIKit;
