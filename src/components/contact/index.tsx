import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ContactProps {
  email?: string;
  github?: string;
  linkedin?: string;
  profileLink?: string;
  message?: string;
  bulletItems?: string[];
}

const defaultBulletItems = [
  'Collaboration on DevSecOps & security projects.',
  'Building secure systems and automation together.',
  'Mentoring & knowledge sharing for your team.',
  'Contributing to your success—let\'s talk.',
];

const defaultLinkedIn = "https://linkedin.com/in/uwe-w-542092298";

export default function Contact({
  email = "uwe@wohlleber.dev",
  github = "https://github.com/4gh0rn",
  linkedin = defaultLinkedIn,
  profileLink,
  message,
  bulletItems = defaultBulletItems,
}: ContactProps): JSX.Element {
  const profileHref = profileLink ?? linkedin;

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactLayout}>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <div className={styles.contactMessageWrap}>
            <div className={styles.contactMessage}>
              <ul className={styles.contactBulletList}>
                {bulletItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {message && <p>{message}</p>}
            </div>
          </div>
          <div className={styles.contactRight}>
            <p className={styles.contactGreeting}>Looking forward to hearing from you!</p>
            <div className={styles.contactInfo}>
              <a 
                href={`mailto:${email}`}
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <span>{email}</span>
              </a>
              <a 
                href={profileHref}
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
