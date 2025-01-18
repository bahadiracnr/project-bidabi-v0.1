# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

project-root/
│
├── public/ # Statik dosyalar
│ ├── index.html # React uygulamasının temel HTML dosyası
│ ├── favicon.ico # Favicon
│ └── ... # Diğer statik dosyalar
│
├── src/ # Uygulama kaynak dosyaları
│ │
│ ├── assets/ # Statik varlıklar (görseller, stiller, fontlar)
│ │ ├── images/ # Görseller (logo, ikonlar, vb.)
│ │ ├── styles/ # CSS dosyaları
│ │ │ ├── variables.css # CSS değişkenleri (renkler, fontlar, vb.)
│ │ │ ├── reset.css # Tarayıcılar arası tutarlılık için reset dosyası
│ │ │ ├── typography.css # Genel tipografi stilleri
│ │ │ ├── utilities.css # Yardımcı sınıflar (margin, padding, vb.)
│ │ │ └── main.css # Global CSS dosyası
│ │ └── fonts/ # Font dosyaları
│ │
│ ├── components/ # Yeniden kullanılabilir bileşenler
│ │ ├── Header/ # Header bileşeni
│ │ │ ├── Header.jsx
│ │ │ ├── Header.module.css
│ │ │ └── Logo.jsx
│ │ ├── Footer/ # Footer bileşeni
│ │ │ ├── Footer.jsx
│ │ │ ├── Footer.module.css
│ │ ├── Button/ # Genel buton bileşeni
│ │ │ ├── Button.jsx
│ │ │ ├── Button.module.css
│ │ └── ...
│ │
│ ├── pages/ # Sayfalar
│ │ ├── Home/ # Ana sayfa
│ │ │ ├── Home.jsx
│ │ │ ├── Home.module.css
│ │ ├── About/ # Hakkımızda sayfası
│ │ │ ├── About.jsx
│ │ │ ├── About.module.css
│ │ └── ...
│ │
│ ├── context/ # React Context API dosyaları
│ │ ├── ThemeContext.js # Tema yönetimi için context
│ │ └── AuthContext.js # Kimlik doğrulama için context
│ │
│ ├── hooks/ # Özel hook'lar
│ │ ├── useAuth.js # Kimlik doğrulama hook'u
│ │ ├── useFetch.js # Veri çekmek için genel hook
│ │ └── ...
│ │
│ ├── utils/ # Yardımcı işlevler
│ │ ├── formatDate.js # Tarih biçimlendirme işlevi
│ │ ├── api.js # API çağrılarını yöneten işlevler
│ │ └── constants.js # Genel sabitler
│ │
│ ├── App.jsx # Uygulamanın ana bileşeni
│ ├── index.js # React uygulamasının giriş noktası
│ └── reportWebVitals.js # Performans raporlaması
│
├── .gitignore # Git için göz ardı edilen dosyalar
├── package.json # Proje bağımlılıkları ve betikleri
├── README.md # Proje açıklaması
└── yarn.lock / package-lock.json # Bağımlılıkların kilit dosyası









<section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.2] dark:opacity-[0.1]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
            <div classN="grid lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Yetenek ve Fırsatları <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Buluşturan</span> Platform
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        Binlerce freelancer ve işveren burada buluşuyor. Hayalinizdeki projeyi gerçekleştirin veya yeteneklerinizi sergileyerek kazanç elde edin.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="./pages/register.html" 
                           className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
                            Hemen Başla
                        </a>
                        <a href="./pages/projects.html" 
                           className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                            Projeleri Keşfet
                        </a>
                    </div>
                </div>
                <div className="relative parallax" data-aos="fade-left" data-speed="2">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <img src="https://img.freepik.com/free-vector/team-developers-working-mobile-app_23-2148796959.jpg" 
                         alt="Hero Illustration" 
                         className="relative w-full rounded-2xl shadow-2xl hover-effect">
                </div>
            </div>
        </div>
    </section>