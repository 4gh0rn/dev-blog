import React from 'react';
import Link from '@docusaurus/Link';
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
    skills: ["Linux", "Infrastructure as Code (Ansible)", "SSH", "Git", "NGINX"],
    imageUrl: "/img/projects/v-server-setup.png"
  },
  {
    title: "Baby Tools Shop",
    description: "E-commerce platform for baby tools and accessories. Modern web application with shopping cart functionality, product management, and secure payment processing.",
    docLink: "/docs/projects/baby-tools-shop",
    skills: ["Web Development", "Database"],
    imageUrl: "/img/projects/baby-tools-shop.png"
  },
  {
    title: "Truck Signs API",
    description: "RESTful API for managing truck signs and vehicle customization services. Provides endpoints for sign design, ordering, and inventory management.",
    docLink: "/docs/projects/truck-signs-api",
    skills: ["Backend Development (REST APIs)", "Database"],
    imageUrl: "/img/projects/truck-signs-api.png"
  },
  {
    title: "Juice Shop Meister",
    description: "Security-focused web application project based on OWASP Juice Shop. Learning platform for web application security vulnerabilities and penetration testing.",
    docLink: "/docs/projects/juice-shop-meister",
    skills: ["Web Security (OWASP, Penetration Testing)"],
    imageUrl: "/img/projects/juice-shop-meister.png"
  },
  {
    title: "WordPress",
    description: "WordPress website development and customization project. Content management system setup, theme development, and plugin integration.",
    docLink: "/docs/projects/wordpress",
    skills: ["WordPress", "Web Development"],
    imageUrl: "/img/projects/wordpress.png"
  },
  {
    title: "Conduit Container",
    description: "Container deployment and management solution. Complete Docker and CI/CD pipeline for automated container orchestration and deployment.",
    docLink: "/docs/projects/conduit-container",
    githubLink: "https://github.com/4gh0rn/conduit-container",
    skills: ["Docker", "CI/CD & Deployment", "Container Orchestration", "DevOps", "GitHub Actions"],
    imageUrl: "/img/projects/conduit-container.png"
  },
  {
    title: "Minecraft-Server",
    description: "Minecraft server setup and management project. Automated server deployment, configuration management, and plugin administration using DevOps practices.",
    docLink: "/docs/projects/minecraft-server",
    skills: ["Server Management", "Docker"],
    imageUrl: "/img/projects/minecraft-server.png"
  },
  {
    title: "Conduit Deployment",
    description: "Deployment automation and infrastructure management for Conduit applications. CI/CD pipelines, environment configuration, and deployment strategies.",
    docLink: "/docs/projects/conduit-deployment",
    skills: ["CI/CD & Deployment", "DevOps"],
    imageUrl: "/img/projects/conduit-deployment.png"
  }
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.imageUrl && (
                <div className={styles.projectImageContainer}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className={styles.projectImage}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = '/img/docusaurus.png';
                    }}
                  />
                </div>
              )}
              <div className={styles.projectCardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectSkills}>
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                {project.docLink.startsWith('http') ? (
                  <Link
                    href={project.docLink}
                    className={clsx('button button--outline button--primary', styles.projectLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docs
                  </Link>
                ) : (
                  <Link
                    to={project.docLink}
                    className={clsx('button button--outline button--primary', styles.projectLink)}
                  >
                    Docs
                  </Link>
                )}
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    className={clsx('button button--outline button--secondary', styles.projectLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
