import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header/index';
import Hero from '@site/src/components/hero/index';
import MySkills from '@site/src/components/my-skills/index';
import Projects from '@site/src/components/projects/index';
import Contact from '@site/src/components/contact/index';
import Footer from '@site/src/components/footer/index';
import ScrollToTop from '@site/src/components/scroll-to-top/index';
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
