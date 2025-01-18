import { useEffect } from 'react';
import '../assets/styles/main.css'; // Stil dosyanızı eklemeyi unutmayın

const App = () => {
  useEffect(() => {
    // Özel cursor ve gradient follower elementlerini oluştur
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.opacity = '0';
    document.body.appendChild(cursor);

    const gradientFollower = document.createElement('div');
    gradientFollower.className = 'gradient-follower';
    gradientFollower.style.opacity = '0';
    document.body.appendChild(gradientFollower);

    let mouseX = 0;
    let mouseY = 0;
    let gradientX = 0;
    let gradientY = 0;

    const handleMouseMove = (e) => {
      // Mouse hareket ettiğinde görünür yap
      cursor.style.opacity = '1';
      gradientFollower.style.opacity = '1';

      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const smoothGradient = () => {
      const dx = mouseX - gradientX;
      const dy = mouseY - gradientY;

      gradientX += dx * 0.1;
      gradientY += dy * 0.1;

      gradientFollower.style.left = gradientX + 'px';
      gradientFollower.style.top = gradientY + 'px';

      requestAnimationFrame(smoothGradient);
    };

    document.addEventListener('mousemove', handleMouseMove);
    smoothGradient();

    // Hover efektleri için elementleri seç
    const hoverElements = document.querySelectorAll('a, button, .hover-effect');

    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-expanded');
        element.classList.add('element-hovered');
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-expanded');
        element.classList.remove('element-hovered');
      });
    });

    // Paralaks efekti
    const handleParallax = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

      document.querySelectorAll('.parallax').forEach((element) => {
        const speed = element.getAttribute('data-speed') || 1;
        element.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    document.addEventListener('mousemove', handleParallax);

    // Hover card efekti
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach((card) => {
      const handleCardMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      };

      const handleCardMouseLeave = () => {
        card.style.transform =
          'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      };

      card.addEventListener('mousemove', handleCardMouseMove);
      card.addEventListener('mouseleave', handleCardMouseLeave);
    });

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleParallax);
      document.body.removeChild(cursor);
      document.body.removeChild(gradientFollower);
    };
  }, []);

  return (
    <div className="App">
      {/* Parallax and tilt card elements */}
      <div className="parallax" data-speed="2">
        Parallax Element
      </div>
      <div className="tilt-card">Hover Me!</div>
      {/* Add your content here */}
    </div>
  );
};

export default App;
