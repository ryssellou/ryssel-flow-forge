import { useEffect, useRef } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in' | 'scale-in' | 'slide-in-left' | 'slide-in-right';

export const useScrollAnimation = (animationType: AnimationType = 'fade-in-up', delay: number = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            // Element is in view - animate in
            setTimeout(() => {
              element.classList.remove(`animate-${animationType}-out`);
              element.classList.add(`animate-${animationType}`);
              element.style.opacity = '1';
              element.style.transform = 'none';
            }, delay);
          } else {
            // Element is out of view - animate out
            element.classList.remove(`animate-${animationType}`);
            element.classList.add(`animate-${animationType}-out`);
            
            // Reset to initial state for next animation
            setTimeout(() => {
              if (!entry.isIntersecting) {
                element.style.opacity = '0';
                
                // Set initial transform based on animation type
                switch(animationType) {
                  case 'fade-in-up':
                    element.style.transform = 'translateY(30px)';
                    break;
                  case 'scale-in':
                    element.style.transform = 'scale(0.95)';
                    break;
                  case 'slide-in-left':
                    element.style.transform = 'translateX(-50px)';
                    break;
                  case 'slide-in-right':
                    element.style.transform = 'translateX(50px)';
                    break;
                  default:
                    element.style.transform = 'none';
                }
              }
            }, 300);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      elementRef.current.style.opacity = '0';
      elementRef.current.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      
      // Set initial transform
      switch(animationType) {
        case 'fade-in-up':
          elementRef.current.style.transform = 'translateY(30px)';
          break;
        case 'scale-in':
          elementRef.current.style.transform = 'scale(0.95)';
          break;
        case 'slide-in-left':
          elementRef.current.style.transform = 'translateX(-50px)';
          break;
        case 'slide-in-right':
          elementRef.current.style.transform = 'translateX(50px)';
          break;
      }
      
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationType, delay]);

  return elementRef;
};