import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Project {
  title: string;
  description: string;
  docLink: string;
  githubLink?: string;
  skills: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "V-Server Setup",
    description: "Complete Ubuntu server configuration - from manual steps to Infrastructure as Code with Ansible. Automated SSH setup, security hardening, NGINX configuration, and Git integration.",
    docLink: "/docs/projects/vserver-setup",
    githubLink: "https://github.com/4gh0rn/v-server-setup",
    skills: ["Linux", "IaC", "SSH", "Git", "NGINX"],
    imageUrl: "/img/projects/v-server-setup.png"
  },
  {
    title: "Baby Tools Shop",
    description: "Containerized e-commerce platform for baby products. Demonstrates containerization, isolation, and horizontal scaling with Docker. Django application packaged for consistent deployment across environments.",
    docLink: "/docs/projects/baby-tools-shop",
    githubLink: "https://github.com/4gh0rn/baby-tools-shop",
    skills: ["Docker", "Containers", "Django", "Python", "Compose", "Gunicorn"],
    imageUrl: "/img/projects/baby-tools-shop.png"
  },
  {
    title: "Truck Signs API",
    description: "Containerized Django REST API for managing truck signs and designs. Demonstrates reproducible, isolated, and secure container operation with PostgreSQL database and Docker networking.",
    docLink: "/docs/projects/truck-signs-api",
    githubLink: "https://github.com/4gh0rn/truck_signs_api",
    skills: ["Docker", "REST", "Django", "PostgreSQL", "Networking", "Python"],
    imageUrl: "/img/projects/truck-signs-api.png"
  },
  {
    title: "Juice Shop Meister",
    description: "Security training project using OWASP Juice Shop to learn web application vulnerabilities, penetration testing techniques, and security best practices. Hands-on practice with ethical hacking.",
    docLink: "/docs/projects/juice-shop-meister",
    githubLink: "https://github.com/4gh0rn/juice-shop-challange",
    skills: ["WebSec", "OWASP", "Pentest", "SQLi", "XSS", "Burp", "Sec Docs"],
    imageUrl: "/img/projects/juice-shop-meister.png"
  },
  {
    title: "WordPress",
    description: "Containerized WordPress blog setup using Docker Compose. Learn to configure and operate a blog application quickly, securely, and simply without manual installation. Reproducible setup with minimal adjustments.",
    docLink: "/docs/projects/wordpress",
    githubLink: "https://github.com/4gh0rn/wp-blog",
    skills: ["Compose", "WordPress", "MariaDB", "Orchestration", "Multi-Container", "Volumes"],
    imageUrl: "/img/projects/wordpress.png"
  },
  {
    title: "Conduit Container",
    description: "Multi-container application packaging backend and frontend into container images. Configure joint operation in the cloud with network security, multi-stage builds, and service orchestration.",
    docLink: "/docs/projects/conduit-container",
    githubLink: "https://github.com/4gh0rn/conduit-container",
    skills: ["Docker", "Multi-Stage", "Compose", "NetSec", "CORS", "Health", "Orchestration"],
    imageUrl: "/img/projects/conduit-container.png"
  },
  {
    title: "Minecraft-Server",
    description: "Learn to host and operate your own game server using Minecraft. Understand server hosting tasks and responsibilities. Configure server and world settings with containerized deployment.",
    docLink: "/docs/projects/minecraft-server",
    githubLink: "https://github.com/4gh0rn/mc-server",
    skills: ["Game Server", "Docker", "Config", "Containers", "Java", "Volumes"],
    imageUrl: "/img/projects/minecraft-server.png"
  },
  {
    title: "Conduit Deployment",
    description: "Design and implement automated application rollout workflow following DevSecOps principles. CI/CD pipeline with GitHub Actions, container registry, and SSH deployment to cloud VM.",
    docLink: "/docs/projects/conduit-deployment",
    githubLink: "https://github.com/4gh0rn/conduit-container",
    skills: ["CI/CD", "GH Actions", "DevSecOps", "SSH Deploy", "Registry", "Auto Deploy", "Secrets"],
    imageUrl: "/img/projects/conduit-deployment.png"
  },
  {
    title: "llmsh",
    description: "A zsh plugin that transforms natural language descriptions into ready-to-run shell commands using LLMs. Integrates seamlessly with terminal workflows using Ollama-compatible APIs and fzf for command selection.",
    docLink: "/docs/projects/llmsh",
    githubLink: "https://github.com/brsksh/llmsh",
    skills: ["Python", "Shell", "zsh", "LLM", "Ollama", "fzf", "API", "CLI"],
    imageUrl: "/img/projects/llmsh.png"
  },
  {
    title: "Security Exploits Research",
    description: "Security research and proof-of-concept development for CVE vulnerabilities. Analysis and exploitation of CVE-2023-32784 (KeePass Master Password Leakage) with memory dump analysis and intelligent brute-force techniques.",
    docLink: "/docs/projects/exploits-research",
    skills: ["Sec Research", "CVE", "Exploits", "Memory", "Python", "Pentest", "Brute-Force", "Sec Tools"],
    imageUrl: "/img/projects/exploits-research.png"
  },
  {
    title: "Security Tools Suite",
    description: "Collection of Python security tools for hash cracking (HashBreaker), SSH brute-forcing (ForcePass), and PDF metadata management (FakeMetadata). Practical tools for authorized penetration testing and privacy protection.",
    docLink: "/docs/projects/security-tools",
    skills: ["Python", "HashCrack", "SSH Test", "PDF", "Sec Tools", "Pentest", "Privacy", "CLI"],
    imageUrl: "/img/projects/security-tools.png"
  },
  {
    title: "Monitoring Platform",
    description: "Modern multi-tenant monitoring platform for comprehensive infrastructure monitoring, security scanning, and alerting. Built with Go, React, and PostgreSQL with real-time dashboards, multi-channel alerts, and AI-powered security analysis.",
    docLink: "/docs/projects/bitnora-monitoring",
    skills: ["Go", "React", "PostgreSQL", "Docker", "Multi-Tenant", "Sec Scan", "Monitoring", "Alerting", "2FA", "CI/CD", "REST", "Jobs", "RLS"],
    imageUrl: "/img/projects/monitoring-platform.png"
  }
];

/** Skill-Namen (oder Teile) auf Emoji-Icons für die Project Card – alle Skills abgedeckt */
const skillIcons: Record<string, string> = {
  'Linux': '🐧', 'Docker': '🐳', 'Python': '🐍', 'Shell': '⌨️', 'Git': '📦', 'NGINX': '🌐',
  'IaC': '⚙️', 'SSH': '🔐', 'Django': '🐍', 'PostgreSQL': '🐘', 'React': '⚛️', 'Go': '🔷',
  'REST': '⚡', 'CI/CD': '🔄', 'GH Actions': '🔄', 'OWASP': '🛡️', 'WordPress': '📝', 'MariaDB': '🗄️',
  'Containers': '📦', 'Compose': '🐳', 'Gunicorn': '🐍', 'Networking': '🔗', 'WebSec': '🛡️',
  'Pentest': '🔍', 'SQLi': '💉', 'XSS': '⚠️', 'Burp': '🔬', 'Sec Docs': '📋', 'Orchestration': '📦',
  'Multi-Container': '📦', 'Volumes': '💾', 'Multi-Stage': '🔨', 'NetSec': '🛡️', 'CORS': '🌐',
  'Health': '❤️', 'Game Server': '🎮', 'Config': '⚙️', 'Java': '☕', 'DevSecOps': '🚀',
  'SSH Deploy': '🚀', 'Registry': '📦', 'Auto Deploy': '🔄', 'Secrets': '🔑', 'zsh': '⌨️',
  'LLM': '🤖', 'Ollama': '🤖', 'fzf': '🔍', 'API': '🔌', 'CLI': '💻', 'Sec Research': '🔍',
  'CVE': '🔒', 'Exploits': '💉', 'Memory': '🧠', 'Brute-Force': '🔨', 'Sec Tools': '🛡️',
  'HashCrack': '🔓', 'SSH Test': '🔐', 'PDF': '📄', 'Privacy': '🔒', 'Multi-Tenant': '🏢',
  'Sec Scan': '🔍', 'Monitoring': '📊', 'Alerting': '🔔', '2FA': '🔐', 'Jobs': '⏱️', 'RLS': '🔒',
};

function getSkillIcon(skillName: string): string {
  for (const [key, icon] of Object.entries(skillIcons)) {
    if (skillName.includes(key)) return icon;
  }
  return skillName.charAt(0).toUpperCase();
}

function ProjectDetailCard({ project, titleOverride }: { project: Project; titleOverride?: string }): JSX.Element {
  const imageUrl = useBaseUrl(project.imageUrl || '/img/docusaurus.png');
  const fallbackUrl = useBaseUrl('/img/docusaurus.png');
  const displayTitle = titleOverride ?? project.title;

  return (
    <div className={clsx(styles.projectDetailCard, !project.imageUrl && styles.projectDetailCardNoImage)}>
      <h3 className={styles.projectDetailTitle}>{displayTitle}</h3>
      <div className={styles.projectDetailSkills}>
        {project.skills.slice(0, 3).map((skill, idx) => (
          <span key={idx} className={styles.projectDetailTag}>
            <span className={styles.projectDetailTagIcon} aria-hidden>{getSkillIcon(skill)}</span>
            {skill}
          </span>
        ))}
        {project.skills.length > 3 && (
          <span className={styles.projectDetailTag}>
            <span className={styles.projectDetailTagIcon} aria-hidden>➕</span>
            +{project.skills.length - 3}
          </span>
        )}
      </div>
      {project.imageUrl && (
        <div className={styles.projectDetailImageWrap}>
          <img
            src={imageUrl}
            alt={project.title}
            className={styles.projectDetailImage}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackUrl;
            }}
          />
        </div>
      )}
      <p className={styles.projectDetailDescription}>{project.description}</p>
      <div className={styles.projectDetailLinks}>
        {project.docLink.startsWith('http') ? (
          <Link
            href={project.docLink}
            className={clsx('button button--outline button--primary', styles.projectDetailLinkDoc)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </Link>
        ) : (
          <Link
            to={project.docLink}
            className={clsx('button button--outline button--primary', styles.projectDetailLinkDoc)}
          >
            Documentation
          </Link>
        )}
        {project.githubLink && (
          <Link
            href={project.githubLink}
            className={clsx('button button--secondary', styles.projectDetailLinkGit)}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My project highlights</h2>

      <div className={styles.projectsTwoCol}>
        {/* Left: vertical list of all projects, selected in blue */}
        <div className={styles.projectListCol}>
          <ol className={styles.projectList}>
            {projects.map((project, index) => (
              <li
                key={index}
                className={clsx(styles.projectListItem, {
                  [styles.projectListItemActive]: index === currentIndex,
                })}
              >
                <button
                  type="button"
                  className={clsx(styles.projectListButton, {
                    [styles.projectListButtonActive]: index === currentIndex,
                  })}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show ${project.title}`}
                  aria-pressed={index === currentIndex}
                >
                  {index + 1}. {project.title}
                </button>
              </li>
            ))}
          </ol>
          <Link to="/docs/projects/overview" className={styles.seeMoreLink}>
            → see more projects
          </Link>
        </div>

        {/* Right: one detail card (Figma: "Project {title}") */}
        <div className={styles.projectDetailCol}>
          <ProjectDetailCard project={projects[currentIndex]} titleOverride={`Project ${projects[currentIndex].title}`} />
        </div>
      </div>

      {/* Mobile: stacked full project cards (Figma: eine untereinander, nummeriert) */}
      <div className={styles.projectsMobile}>
        <div className={styles.projectsMobileStack}>
          {projects.map((project, index) => (
            <ProjectDetailCard
              key={index}
              project={project}
              titleOverride={`${index + 1}. ${project.title}`}
            />
          ))}
        </div>
        <Link to="/docs/projects/overview" className={styles.seeMoreLink}>
          → see more projects
        </Link>
      </div>
    </section>
  );
}
