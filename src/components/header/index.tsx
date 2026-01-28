import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css';

interface NavItem {
  label: string;
  href: string;
  anchor?: boolean;
}

interface HeaderProps {
  logo?: string;
  logoAlt?: string;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '#about-me', anchor: true },
  { label: 'Skills', href: '#my-skills', anchor: true },
  { label: 'Projects', href: '#projects', anchor: true },
  { label: 'Contact', href: '#contact', anchor: true },
];

export default function Header({
  logo,
  logoAlt = 'Portfolio Logo',
  navItems = defaultNavItems,
}: HeaderProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.anchor) {
      e.preventDefault();
      const targetId = item.href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 70; // Approximate header height
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={clsx(styles.header, { [styles.scrolled]: isScrolled })}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo/Brand */}
          <div className={styles.logo}>
            {logo ? (
              <img src={logo} alt={logoAlt} className={styles.logoImage} />
            ) : (
              <span className={styles.logoText}>Uwe Wohlleber</span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={clsx(styles.menuToggle, { [styles.menuOpen]: isMenuOpen })}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className={styles.menuIcon}>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
              <span className={styles.menuLine}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={styles.menuOverlay}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <nav
        className={clsx(styles.mobileNav, { [styles.mobileNavOpen]: isMenuOpen })}
        aria-label="Mobile navigation"
      >
        <ul className={styles.mobileNavList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.mobileNavItem}>
              <a
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, item)}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
