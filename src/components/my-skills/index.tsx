import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Skill {
  name: string;
  icon?: string;
  description: string;
  learnedFrom: string;
  usedIn: string[];
}

const skills: Skill[] = [
  {
    name: "Linux",
    description: "Linux server administration and command line tools for managing Unix-based systems.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "Infrastructure as Code (Ansible)",
    description: "Managing and provisioning infrastructure through machine-readable definition files using Ansible for automated server configuration and management.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "SSH",
    description: "Secure Shell protocol for remote server access and secure communication.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "Git",
    description: "Version control system for tracking changes in code and collaborative development.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup", "Baby Tools Shop", "Truck Signs API", "Juice Shop Meister", "WordPress", "Conduit Container", "Minecraft-Server", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "NGINX",
    description: "High-performance web server and reverse proxy for serving web applications.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "Web Development",
    description: "Building modern web applications with frontend and backend technologies.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "WordPress", "Monitoring Platform"]
  },
  {
    name: "Database",
    description: "Designing and managing databases for storing and retrieving application data.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "WordPress", "Conduit Container", "Monitoring Platform"]
  },
  {
    name: "Backend Development (REST APIs)",
    description: "Server-side development for handling business logic, data processing, and creating RESTful APIs for application communication.",
    learnedFrom: "DevSecOps Course - Truck Signs API Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "Conduit Container", "Monitoring Platform"]
  },
  {
    name: "Web Security (OWASP, Penetration Testing)",
    description: "Implementing security best practices, OWASP standards, and penetration testing methodologies to protect web applications from vulnerabilities.",
    learnedFrom: "DevSecOps Course - Juice Shop Meister Project",
    usedIn: ["Juice Shop Meister"]
  },
  {
    name: "WordPress",
    description: "Content management system for building and customizing websites and blogs.",
    learnedFrom: "DevSecOps Course - WordPress Project",
    usedIn: ["WordPress"]
  },
  {
    name: "Docker",
    description: "Containerization platform for packaging and deploying applications in isolated environments.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "WordPress", "Conduit Container", "Minecraft-Server", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "CI/CD & Deployment",
    description: "Continuous Integration and Continuous Deployment pipelines for automated software delivery and production deployment strategies.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "Container Orchestration",
    description: "Managing and coordinating multiple containers for scalable application deployment.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Baby Tools Shop", "WordPress", "Conduit Container", "Monitoring Platform"]
  },
  {
    name: "DevOps",
    description: "Practices combining software development and IT operations for faster delivery.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "GitHub Actions",
    description: "Automated workflow platform for CI/CD pipelines and development automation.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment"]
  },
  {
    name: "Server Management",
    description: "Administration and maintenance of server infrastructure and services, including game server setup and management.",
    learnedFrom: "DevSecOps Course - Minecraft-Server Project",
    usedIn: ["Minecraft-Server"]
  },
  {
    name: "Python",
    description: "Python programming for backend development, automation, API clients, and tooling. Building CLI tools, web applications, and system automation scripts.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "Conduit Container", "llmsh"]
  },
  {
    name: "Shell Scripting",
    description: "Writing shell scripts for automation, system administration, and tooling. Creating zsh plugins, automation workflows, and command-line tools.",
    learnedFrom: "Personal Project - llmsh",
    usedIn: ["llmsh"]
  },
  {
    name: "LLM Integration & AI Tools",
    description: "Integrating Large Language Models into workflows and tools. Building AI-powered applications, natural language interfaces, and intelligent automation.",
    learnedFrom: "Personal Project - llmsh",
    usedIn: ["llmsh"]
  },
  {
    name: "Go",
    description: "Go programming language for building high-performance backend services, REST APIs, and concurrent applications. Using Fiber framework for web development.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "React",
    description: "React framework for building modern, interactive user interfaces with component-based architecture and real-time updates.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "PostgreSQL",
    description: "PostgreSQL database administration with advanced features including Row-Level Security for multi-tenant applications.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Multi-Tenant Architecture",
    description: "Designing and implementing multi-tenant systems with complete data isolation using Row-Level Security and tenant-aware application logic.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Infrastructure Monitoring",
    description: "Building comprehensive monitoring solutions for infrastructure, services, and applications with real-time dashboards and alerting.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Security Scanning & Assessment",
    description: "Implementing automated security scanning for SSL/TLS, security headers, secrets detection, and vulnerability assessment.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Two-Factor Authentication (2FA)",
    description: "Implementing two-factor authentication using TOTP for enhanced security in web applications.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Background Job Processing",
    description: "Designing and implementing background job processing systems for asynchronous task execution and queue management.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  }
];

export default function MySkills(): JSX.Element {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const handleSkillInteraction = (index: number) => {
    setHoveredSkill(hoveredSkill === index ? null : index);
  };

  return (
    <section id="my-skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={clsx(styles.skillCard, {
                [styles.skillCardHovered]: hoveredSkill === index
              })}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => handleSkillInteraction(index)}
              onTouchStart={() => handleSkillInteraction(index)}
              role="button"
              tabIndex={0}
              aria-label={`${skill.name} - Click to see details`}
            >
              <div className={styles.skillCardFront}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
              <div className={styles.skillCardBack}>
                <h4 className={styles.skillBackTitle}>Learned from:</h4>
                <p className={styles.skillLearnedFrom}>{skill.learnedFrom}</p>
                <h4 className={styles.skillBackTitle}>Used in:</h4>
                <ul className={styles.skillUsedIn}>
                  {skill.usedIn.map((project, idx) => (
                    <li key={idx}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
