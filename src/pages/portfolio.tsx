import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import Hero from '@site/src/components/Hero';
import MySkills from '@site/src/components/my-skills';
import Projects from '@site/src/components/Projects';
import Contact from '@site/src/components/Contact';
import Footer from '@site/src/components/Footer';
import ScrollToTop from '@site/src/components/scroll-to-top';
import styles from './portfolio.module.css';

export default function Portfolio(): JSX.Element {
  useEffect(() => {
    // Set body background to dark on portfolio page
    document.body.style.backgroundColor = '#1E293B';
    document.documentElement.style.backgroundColor = '#1E293B';
    
    return () => {
      // Reset on unmount
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  return (
    <Layout
      title="Portfolio"
      description="My Portfolio - Projects and skills from the DevSecOps course"
      wrapperClassName={styles.portfolioLayout}
      noFooter={true}>
      <Header />
      <main className={styles.portfolioMain}>
        <Hero />
        <MySkills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </Layout>
  );
}
