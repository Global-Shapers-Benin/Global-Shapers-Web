import { useEffect } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to('.preloader', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power2.out',
        onComplete: onComplete
      });
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="spinner-container">
      <div className="outer-spinner"></div>
      <div className="inner-spinner"></div>
      <div className="innermost-spinner"></div>
    </div>
  );
};

export default Preloader;
