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
  message = "I am interested in exciting projects in DevSecOps, cloud infrastructure, and modern web development. Specialized in Infrastructure as Code, container orchestration, and automated CI/CD pipelines. If you have questions about my projects, want to collaborate, or are looking for an engaged DevSecOps engineer, feel free to contact me."
}: ContactProps): JSX.Element {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactMessage}>
            <p>{message}</p>
          </div>
          <div className={styles.contactLinks}>
            <a 
              href={`mailto:${email}`}
              className={clsx('button button--primary button--lg', styles.contactButton)}
            >
              Send Email
            </a>
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('button button--secondary button--lg', styles.contactButton)}
            >
              GitHub
            </a>
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx('button button--secondary button--lg', styles.contactButton)}
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
