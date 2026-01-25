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
  description = "I am a passionate developer focused on DevSecOps, cloud infrastructure, and modern web technologies. Specialized in Infrastructure as Code, container orchestration, and automated deployment pipelines. In this portfolio, I showcase my projects and skills from the Developer Akademie DevSecOps course.",
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
          <div className={clsx('col col--6', styles.heroImage)}>
            <img 
              src={profileImage} 
              alt={name}
              className={styles.profileImage}
            />
          </div>
          <div className={clsx('col col--6', styles.heroContent)}>
            <h1 className={styles.heroTitle}>{name}</h1>
            <h2 className={styles.heroSubtitle}>{title}</h2>
            <p className={styles.heroDescription}>{description}</p>
            <button 
              className={clsx('button button--primary button--lg', styles.contactButton)}
              onClick={scrollToContact}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
