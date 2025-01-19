import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
              >
                Bidabi
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600"
              >
                Projeler
              </Link>

              <Link
                to="/login" // bu path Routes.jsx'teki path ile tam olarak eşleşmeli
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600"
              >
                Giriş Yap
              </Link>
              <a
                href="./pages/register.html"
                className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Kayıt Ol
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
