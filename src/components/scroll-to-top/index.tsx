import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = 250;
      const nearBottom = scrollTop + windowHeight >= documentHeight - threshold;
      setIsVisible(nearBottom);
    };

    toggleVisibility();
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
      type="button"
    >
      <svg
        className={styles.scrollToTopIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
