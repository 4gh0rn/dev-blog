import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import Hero from '@site/src/components/Hero';
import MySkills from '@site/src/components/MySkills';
import Projects from '@site/src/components/Projects';
import Contact from '@site/src/components/Contact';
import ScrollToTop from '@site/src/components/ScrollToTop';
import styles from './portfolio.module.css';

export default function Portfolio(): JSX.Element {
  return (
    <Layout
      title="Portfolio"
      description="My Portfolio - Projects and skills from the DevSecOps course"
      wrapperClassName={styles.portfolioLayout}>
      <Header />
      <main className={styles.portfolioMain}>
        <Hero />
        <MySkills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
    </Layout>
  );
}
