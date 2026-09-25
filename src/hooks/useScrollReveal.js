import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const currentEl = ref.current;
    if (currentEl) observer.observe(currentEl);

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [threshold]);

  return [ref, isVisible];
}
