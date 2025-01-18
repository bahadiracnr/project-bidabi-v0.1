import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Mouse from '../../components/Effects/MouseEffects';
import AOSComponent from '../../components/Effects/AOSComponent';

function Home() {
  return (
    <>
      <div>
        <AOSComponent />
        <Mouse />
        <Header></Header>
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-purple-50/100">
          <div className="absolute inset-0 bg-gradient-to-br  dark:from-gray-800 dark:to-gray-900"></div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.2] dark:opacity-[0.1]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Yetenek ve Fırsatları{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
                    Buluşturan
                  </span>{' '}
                  Platform
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Binlerce freelancer ve işveren burada buluşuyor. Hayalinizdeki
                  projeyi gerçekleştirin veya yeteneklerinizi sergileyerek
                  kazanç elde edin.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="./pages/register.html"
                    className="bg-gradient-to-r from-purple-600 to-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
                  >
                    Hemen Başla
                  </a>
                  <a
                    href="./pages/projects.html"
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    Projeleri Keşfet
                  </a>
                </div>
              </div>
              <div
                className="relative parallax"
                data-aos="fade-left"
                data-speed="2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                {/* <img src="https://img.freepik.com/free-vector/team-developers-working-mobile-app_23-2148796959.jpg" 
                         alt="Hero Illustration" 
                         className="relative w-full rounded-2xl shadow-2xl hover-effect"> */}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="grid md:grid-cols-4 gap-8 text-center"
              data-aos="fade-up"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  10K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Aktif Freelancer
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  5K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Tamamlanan Proje
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  2K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Mutlu Müşteri
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  ₺1M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Ödeme Hacmi
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                data-aos="fade-up"
              >
                Neden Bidabi?
              </h2>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Size en uygun freelancerı bulmanın veya yeni projeler almanın en
                kolay yolu
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Güvenli Ödeme
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ödemeleriniz proje tamamlanana kadar güvende. Sadece işinizden
                  memnun kaldığınızda ödeme serbest bırakılır.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Geniş Topluluk
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Binlerce yetenekli freelancer ve işveren arasından seçim
                  yapın. Her projeye uygun uzman bulun.
                </p>
              </div>

              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Hızlı Eşleşme
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Akıllı eşleştirme sistemimiz sayesinde projenize en uygun
                  freelancer ı hızlıca bulun.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                data-aos="fade-up"
              >
                Popüler Kategoriler
              </h2>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                İhtiyacınız olan her alanda uzman freelancer lar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="./pages/projects.html?category=web"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Web Geliştirme
                </h3>
                <p className="text-gray-600 dark:text-gray-400">1500+ Proje</p>
              </a>

              <a
                href="./pages/projects.html?category=mobile"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Mobil Uygulama
                </h3>
                <p className="text-gray-600 dark:text-gray-400">800+ Proje</p>
              </a>

              <a
                href="./pages/projects.html?category=design"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Grafik Tasarım
                </h3>
                <p className="text-gray-600 dark:text-gray-400">2000+ Proje</p>
              </a>

              <a
                href="./pages/projects.html?category=marketing"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Dijital Pazarlama
                </h3>
                <p className="text-gray-600 dark:text-gray-400">1200+ Proje</p>
              </a>

              <a
                href="./pages/projects.html?category=writing"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Yazı ve Çeviri
                </h3>
                <p className="text-gray-600 dark:text-gray-400">900+ Proje</p>
              </a>

              <a
                href="./pages/projects.html?category=video"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Video ve Animasyon
                </h3>
                <p className="text-gray-600 dark:text-gray-400">600+ Proje</p>
              </a>

              <a
                href="./pages/projects.html?category=audio"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Ses ve Müzik
                </h3>
                <p className="text-gray-600 dark:text-gray-400">400+ Proje</p>
              </a>

              <a
                href="./pages/projects.html?category=3d"
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 tilt-card hover-effect"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  3D Modelleme
                </h3>
                <p className="text-gray-600 dark:text-gray-400">300+ Proje</p>
              </a>
            </div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-400"></div>
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px]"></div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center text-white" data-aos="zoom-in">
              <h2 className="text-4xl font-bold mb-4">
                Hayalinizdeki Projeyi Gerçekleştirin
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Binlerce yetenekli freelancer arasından size en uygun olanı
                bulun
              </p>
              <a
                href="./pages/register.html"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-opacity"
              >
                Ücretsiz Başlayın
              </a>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
