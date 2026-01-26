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
    icon: "🐧",
    description: "Server administration and command line tools.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "Infrastructure as Code (Ansible)",
    icon: "⚙️",
    description: "Automated infrastructure provisioning and configuration.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "SSH",
    icon: "🔐",
    description: "Secure remote server access and communication.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "Git",
    icon: "📦",
    description: "Version control and collaborative development.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup", "Baby Tools Shop", "Truck Signs API", "Juice Shop Meister", "WordPress", "Conduit Container", "Minecraft-Server", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "NGINX",
    icon: "🌐",
    description: "High-performance web server and reverse proxy.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"]
  },
  {
    name: "Web Development",
    icon: "💻",
    description: "Building modern web applications.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "WordPress", "Monitoring Platform"]
  },
  {
    name: "Database",
    icon: "🗄️",
    description: "Database design and management.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "WordPress", "Conduit Container", "Monitoring Platform"]
  },
  {
    name: "Backend Development (REST APIs)",
    icon: "⚡",
    description: "Server-side development and RESTful APIs.",
    learnedFrom: "DevSecOps Course - Truck Signs API Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "Conduit Container", "Monitoring Platform"]
  },
  {
    name: "Web Security (OWASP, Penetration Testing)",
    icon: "🛡️",
    description: "Security best practices and penetration testing.",
    learnedFrom: "DevSecOps Course - Juice Shop Meister Project",
    usedIn: ["Juice Shop Meister"]
  },
  {
    name: "WordPress",
    icon: "📝",
    description: "Content management system for websites.",
    learnedFrom: "DevSecOps Course - WordPress Project",
    usedIn: ["WordPress"]
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containerization and application packaging.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "WordPress", "Conduit Container", "Minecraft-Server", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "CI/CD & Deployment",
    icon: "🔄",
    description: "Automated pipelines and deployment strategies.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "Container Orchestration",
    icon: "📦",
    description: "Managing multiple containers at scale.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Baby Tools Shop", "WordPress", "Conduit Container", "Monitoring Platform"]
  },
  {
    name: "DevOps",
    icon: "🚀",
    description: "Development and operations practices.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment", "Monitoring Platform"]
  },
  {
    name: "GitHub Actions",
    icon: "⚙️",
    description: "CI/CD workflows and automation.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment"]
  },
  {
    name: "Server Management",
    icon: "🖥️",
    description: "Server administration and maintenance.",
    learnedFrom: "DevSecOps Course - Minecraft-Server Project",
    usedIn: ["Minecraft-Server"]
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Backend development and automation.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "Conduit Container", "llmsh"]
  },
  {
    name: "Shell Scripting",
    icon: "💻",
    description: "Automation and command-line tools.",
    learnedFrom: "Personal Project - llmsh",
    usedIn: ["llmsh"]
  },
  {
    name: "LLM Integration & AI Tools",
    icon: "🤖",
    description: "AI-powered applications and automation.",
    learnedFrom: "Personal Project - llmsh",
    usedIn: ["llmsh"]
  },
  {
    name: "Go",
    icon: "⚡",
    description: "High-performance backend services and APIs.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Modern interactive user interfaces.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Advanced database administration.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Multi-Tenant Architecture",
    icon: "🏢",
    description: "Multi-tenant systems with data isolation.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Infrastructure Monitoring",
    icon: "📊",
    description: "Monitoring solutions and alerting.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Security Scanning & Assessment",
    icon: "🔍",
    description: "Automated security scanning and analysis.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Two-Factor Authentication (2FA)",
    icon: "🔒",
    description: "TOTP-based two-factor authentication.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"]
  },
  {
    name: "Background Job Processing",
    icon: "⏱️",
    description: "Asynchronous task execution systems.",
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
                <div className={styles.skillIcon}>
                  {skill.icon || skill.name.charAt(0).toUpperCase()}
                </div>
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
