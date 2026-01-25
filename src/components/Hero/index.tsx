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
            <div className={styles.heroDescription}>
              <p>
                IT professional with over 10 years of experience as a system administrator, recently transitioning into security and DevSecOps. I'm passionate about DevOps practices, building secure systems, and enabling others—primarily fellow sysadmins—through knowledge sharing and mentorship.
              </p>
              <p>
                With my extensive background in IT administration, I've developed a deep understanding of infrastructure, automation, and system design. Over the past few years, I've shifted focus more toward DevSecOps, security practices, and modern infrastructure automation. I enjoy building custom automation workflows and exploring AI technologies. My journey into security has been driven by the desire to build more resilient and secure systems while helping other sysadmins learn and grow.
              </p>
              <p>
                When not working on infrastructure or security-related code, I build tools and applications, write about IT and security topics, and help fellow sysadmins develop their skills through hands-on learning and practical examples.
              </p>
              <div className={styles.focusAreas}>
                <h3 className={styles.focusAreasTitle}>Focus Areas</h3>
                <ul className={styles.focusAreasList}>
                  <li>DevOps & Infrastructure</li>
                  <li>Web Application Security</li>
                  <li>Penetration Testing</li>
                  <li>System Administration</li>
                  <li>Automation & Tooling</li>
                  <li>AI & Automation</li>
                  <li>Knowledge Sharing & Mentoring</li>
                </ul>
              </div>
            </div>
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
