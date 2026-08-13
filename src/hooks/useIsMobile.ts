import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Check if window is less than 768px (standard tablet/mobile breakpoint)
      // Rely ONLY on screen size, ignoring touch screen capabilities
      const isSmallScreen = window.innerWidth < 768;

      setIsMobile(isSmallScreen);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};
