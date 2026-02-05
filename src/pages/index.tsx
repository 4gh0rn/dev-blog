import React, { useLayoutEffect } from 'react';
import Layout from '@theme/Layout';
import Header from '../components/header';
import Hero from '../components/hero';
import MySkills from '../components/my-skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import ScrollToTop from '../components/scroll-to-top';
import styles from './index.module.css';

const PORTFOLIO_PAGE_CLASS = 'portfolio-page';

export default function Home(): JSX.Element {
  useLayoutEffect(() => {
    // Portfolio page: dark background + hide Docusaurus navbar (sofort vor Paint)
    document.body.style.backgroundColor = '#262E34';
    document.documentElement.style.backgroundColor = '#262E34';
    document.body.classList.add(PORTFOLIO_PAGE_CLASS);
    document.documentElement.classList.add(PORTFOLIO_PAGE_CLASS);

    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
      document.body.classList.remove(PORTFOLIO_PAGE_CLASS);
      document.documentElement.classList.remove(PORTFOLIO_PAGE_CLASS);
    };
  }, []);

  return (
    <Layout
      title="Portfolio"
      description="My Portfolio - Projects and skills from the DevSecOps course"
      wrapperClassName={styles.portfolioLayout}
      noFooter={true}
      noNavbar={true}
    >
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
