import Header from '../../components/Header/Header';

const Login = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex-1 flex items-center justify-center px-4 py-12 relative bg-purple-50/100 relative min-h-screen flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 -z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.2] dark:opacity-[0.1] -z-10"></div>

          <div className="max-w-md w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Hoş Geldiniz
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Hesabınıza giriş yapın
                </p>
              </div>

              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    E-posta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                                       text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                       dark:bg-gray-700 transition-colors duration-200"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Şifre
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                                       text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                       dark:bg-gray-700 transition-colors duration-200"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-600 rounded
                                           dark:bg-gray-700 transition-colors duration-200"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                    >
                      Beni hatırla
                    </label>
                  </div>

                  <a
                    href="#"
                    className="text-sm font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Şifremi unuttum
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium 
                                   text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 focus:outline-none 
                                   focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-opacity duration-200"
                >
                  Giriş Yap
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    veya
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 
                                     rounded-xl shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 
                                     hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google ile devam et
                </button>

                <button
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 
                                     rounded-xl shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 
                                     hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter ile devam et
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Hesabınız yok mu?
                <a
                  href="register.html"
                  className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Hemen kayıt olun
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
