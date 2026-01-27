import { useState, useEffect } from 'react';

const useDetectScroll = (treshold: number) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > treshold);
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [treshold]);

  return [isScrolled];
};

export default useDetectScroll;
