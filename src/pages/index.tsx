import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/homepage-features';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          DevSecOps Engineer | Infrastructure as Code | Cloud Automation
        </p>
        <p className={styles.heroDescription}>
          Documentation, guides, and projects on DevOps, Security, and modern infrastructure
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/projects/overview">
            Documentation 📚
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/portfolio"
            style={{marginLeft: '1rem'}}>
            Portfolio 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProjectsPreview() {
  return (
    <section className={styles.projectsPreview}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionDescription}>
              A selection of my projects from the DevSecOps domain
            </p>
            <div className={styles.ctaContainer}>
              <Link
                className="button button--primary button--lg"
                to="/portfolio">
                View All Projects →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation and portfolio of Uwe Wohlleber - DevSecOps Engineer">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProjectsPreview />
      </main>
    </Layout>
  );
}
