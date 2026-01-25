import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Infrastructure as Code',
    emoji: '🏗️',
    description: (
      <>
        Automated server configuration with <strong>Ansible</strong> and 
        cloud infrastructure with <strong>Terraform</strong>. From manual 
        steps to fully automated infrastructure.
      </>
    ),
  },
  {
    title: 'Container & Orchestration',
    emoji: '🐳',
    description: (
      <>
        Docker containers, Kubernetes clusters, and CI/CD pipelines. 
        Modern deployment strategies for scalable applications.
      </>
    ),
  },
  {
    title: 'Security & Hardening',
    emoji: '🔒',
    description: (
      <>
        Server hardening, firewall configuration, SSH security with 
        YubiKey and client certificates. Security-first approach in all projects.
      </>
    ),
  },
  {
    title: 'Monitoring & Observability',
    emoji: '📊',
    description: (
      <>
        Complete monitoring and logging stacks. Metrics, logs, and 
        traces for better visibility in production environments.
      </>
    ),
  },
  {
    title: 'Modern Web Development',
    emoji: '⚛️',
    description: (
      <>
        React, TypeScript, Next.js and modern frontend technologies. 
        From static sites to interactive AI applications.
      </>
    ),
  },
  {
    title: 'DevOps Best Practices',
    emoji: '🚀',
    description: (
      <>
        CI/CD with GitHub Actions, Git workflows, automated testing 
        and deployment. Continuous improvement of development processes.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>What You'll Find Here</h2>
            <p className={styles.sectionDescription}>
              Practical guides, project documentation, and best practices 
              from the DevSecOps domain
            </p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
