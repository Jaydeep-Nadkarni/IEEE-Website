import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Triggers animation when element becomes visible in viewport
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @returns {Object} - ref and isVisible state
 */
export const useScrollAnimation = (options = { threshold: 0.1 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing after element becomes visible
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold]);

  return { ref, isVisible };
};
