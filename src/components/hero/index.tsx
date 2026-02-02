import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

export default function Hero({
  name = "Uwe Wohlleber",
  title = "DevSecOps Engineer",
  description = "IT professional with over 10 years in system administration, now focused on DevSecOps and security. I'm passionate about building secure systems, automation, and sharing knowledge with fellow sysadmins.",
  imageUrl = "/img/docusaurus.png"
}: HeroProps): JSX.Element {
  const profileImage = useBaseUrl(imageUrl);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about-me" className={styles.hero}>
      <div className="container">
        <div className={clsx('row', styles.heroRow)}>
          <div className={clsx('col col--6', styles.heroHeading)}>
            <p className={styles.heroGreeting}>Hey there. 👋 I am</p>
            <h1 className={styles.heroTitle}>{name}</h1>
            <h2 className={styles.heroSubtitle}>{title}</h2>
          </div>
          <div className={clsx('col col--6', styles.heroImage)}>
            <div className={styles.profileImageWrapper}>
              <div className={styles.profileImageInner}>
                <img src={profileImage} alt={name} className={styles.profileImage} />
              </div>
            </div>
          </div>
          <div className={clsx('col col--6', styles.heroDescriptionWrap)}>
            <div className={styles.heroDescription}>
              <p>
                {description}
              </p>
            </div>
          </div>
          <div className={styles.heroButtonWrap}>
            <button 
              className={clsx('button button--lg', styles.contactButton)}
              onClick={scrollToContact}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
