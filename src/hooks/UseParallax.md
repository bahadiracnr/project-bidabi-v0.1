import { useEffect } from 'react';

const useParallax = () => {
useEffect(() => {
const handleMouseMove = (e) => {
const moveX = (e.clientX - window.innerWidth / 2) _ 0.01;
const moveY = (e.clientY - window.innerHeight / 2) _ 0.01;

      document.querySelectorAll('.parallax').forEach((element) => {
        const speed = element.getAttribute('data-speed') || 1;
        element.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

}, []);
};

export default useParallax;
