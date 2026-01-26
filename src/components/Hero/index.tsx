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
  description = "IT professional with over 10 years of experience as a system administrator, recently transitioning into security and DevSecOps. I'm passionate about DevOps practices, building secure systems, and enabling others—primarily fellow sysadmins—through knowledge sharing and mentorship. With my extensive background in IT administration, I've developed a deep understanding of infrastructure, automation, and system design. Over the past few years, I've shifted focus more toward DevSecOps, security practices, and modern infrastructure automation. I enjoy building custom automation workflows and exploring AI technologies.",
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
          <div className={clsx('col col--6', styles.heroContent)}>
            <p className={styles.heroGreeting}>Hey there. 👋 I am</p>
            <h1 className={styles.heroTitle}>{name}</h1>
            <h2 className={styles.heroSubtitle}>{title}</h2>
            <div className={styles.heroDescription}>
              <p>
                {description}
              </p>
            </div>
            <button 
              className={clsx('button button--lg', styles.contactButton)}
              onClick={scrollToContact}
            >
              Contact Me
            </button>
          </div>
          <div className={clsx('col col--6', styles.heroImage)}>
            <div className={styles.profileImageWrapper}>
              <img 
                src={profileImage} 
                alt={name}
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
