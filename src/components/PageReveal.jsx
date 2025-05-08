// components/transitions/PageRevealer.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageRevealer.css'; // Your animation styles

const PageRevealer = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Trigger animation on route change
    document.documentElement.classList.add('page-transition');
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove('page-transition');
    }, 500); // Match animation duration
    return () => clearTimeout(timeout);
  }, [location.key]); // Re-run on route change

  return children;
};

export default PageRevealer;