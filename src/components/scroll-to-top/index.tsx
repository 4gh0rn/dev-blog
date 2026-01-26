import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={clsx(styles.scrollToTop, {
        [styles.visible]: isVisible
      })}
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
    >
      ↑
    </button>
  );
}
