import { useState, useEffect } from 'react';

export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el); // fire once
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold, options]);

  return inView;
}
