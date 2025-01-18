import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animasyonları için gerekli CSS

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
};

export default useAOS;
