import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FooterProps {
  copyright?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export default function Footer({
  copyright = `© ${new Date().getFullYear()} Uwe Wohlleber. All rights reserved.`,
  github = "https://github.com/4gh0rn",
  linkedin,
  email = "uwe@wohlleber.dev"
}: FooterProps): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerCopyright}>
            <p>{copyright}</p>
          </div>
          <div className={styles.footerLinks}>
            <a 
              href={`mailto:${email}`}
              className={styles.footerLink}
              aria-label="Email"
            >
              Email
            </a>
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
              aria-label="GitHub"
            >
              GitHub
            </a>
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
