// components/AOSProvider.jsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      // Optional settings here (e.g., duration, once, easing)
      duration: 1200,
      once: false, // Animation repeats on scroll up/down
    });
    // Refresh AOS on component updates if needed
    // AOS.refresh(); 
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
