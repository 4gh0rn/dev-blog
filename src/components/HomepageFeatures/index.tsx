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
        Ansible Vault for secure secret management. From manual steps 
        to fully automated infrastructure.
      </>
    ),
  },
  {
    title: 'Container & Orchestration',
    emoji: '🐳',
    description: (
      <>
        Docker containers, Docker Compose, and multi-container applications. 
        Modern deployment strategies for scalable, isolated applications.
      </>
    ),
  },
  {
    title: 'Security & Penetration Testing',
    emoji: '🔒',
    description: (
      <>
        Web application security, OWASP Top 10, penetration testing with 
        OWASP Juice Shop. Security-first approach in all projects.
      </>
    ),
  },
  {
    title: 'CI/CD & Deployment',
    emoji: '🚀',
    description: (
      <>
        CI/CD pipelines with GitHub Actions, automated deployment workflows, 
        and DevSecOps practices. Container registry integration and SSH deployment.
      </>
    ),
  },
  {
    title: 'Backend Development',
    emoji: '⚙️',
    description: (
      <>
        Django REST APIs, Python backend development, and database integration. 
        Building scalable, containerized backend services.
      </>
    ),
  },
  {
    title: 'AI & Automation Tools',
    emoji: '🤖',
    description: (
      <>
        LLM integration for terminal productivity, shell scripting, and 
        automation tooling. Building intelligent tools that enhance workflows.
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
