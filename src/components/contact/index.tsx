import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ContactProps {
  email?: string;
  github?: string;
  linkedin?: string;
  message?: string;
}

export default function Contact({
  email = "uwe@wohlleber.dev",
  github = "https://github.com/4gh0rn",
  linkedin,
  message = "With over 10 years of experience as a system administrator and a recent focus on DevSecOps and security, I'm passionate about building secure, resilient systems and helping fellow sysadmins grow their skills.\n\nI'm open to discussing exciting projects in DevSecOps, cloud infrastructure, and security. Whether you have questions about my projects, want to collaborate, need mentorship for your sysadmin team, or are looking for someone who bridges traditional IT administration with modern security practices—feel free to reach out."
}: ContactProps): JSX.Element {
  // Split message by double newlines to create paragraphs
  const messageParagraphs = message.split('\n\n').filter(p => p.trim());
  
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactLayout}>
          <div className={styles.contactLeft}>
            <h2 className={styles.sectionTitle}>Contact Me</h2>
            <div className={styles.contactMessage}>
              {messageParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
                <span className={styles.contactIcon}>✉</span>
                <span>{email}</span>
              </a>
              {linkedin && (
                <a 
                  href={linkedin}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.contactIcon}>🔗</span>
                  <span>Profile Page</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
