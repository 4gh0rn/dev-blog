import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Header from '../components/header/index';
import Hero from '../components/hero/index';
import MySkills from '../components/my-skills/index';
import Projects from '../components/projects/index';
import Contact from '../components/contact/index';
import Footer from '../components/footer/index';
import ScrollToTop from '../components/scroll-to-top/index';
import styles from './index.module.css';

export default function Home(): JSX.Element {
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
