import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Skill {
  name: string;
  icon?: string;
  description: string;
  learnedFrom: string;
  usedIn: string[];
  /** 3–4 bullet points for mobile (what the skill covers) */
  bullets?: string[];
}

const skills: Skill[] = [
  {
    name: "Linux",
    icon: "🐧",
    description: "Server administration and command line tools.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"],
    bullets: ["Server administration", "Command line & shell", "System configuration", "Operations & maintenance"]
  },
  {
    name: "IaC",
    icon: "⚙️",
    description: "Automated infrastructure provisioning and configuration.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"],
    bullets: ["Infrastructure as Code", "Automated provisioning", "Reproducible environments", "Configuration management"]
  },
  {
    name: "SSH",
    icon: "🔐",
    description: "Secure remote server access and communication.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"],
    bullets: ["Secure remote connections", "Key-based authentication", "Tunneling & port forwarding", "Passwordless server access"]
  },
  {
    name: "Git",
    icon: "📦",
    description: "Version control and collaborative development.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup", "Baby Tools Shop", "Truck Signs API", "Juice Shop Meister", "WordPress", "Conduit Container", "Minecraft-Server", "Conduit Deployment", "Monitoring Platform"],
    bullets: ["Version control", "Branches & merges", "Collaborative development", "GitHub/GitLab workflows"]
  },
  {
    name: "NGINX",
    icon: "🌐",
    description: "High-performance web server and reverse proxy.",
    learnedFrom: "DevSecOps Course - V-Server Setup Project",
    usedIn: ["V-Server Setup"],
    bullets: ["Web server & reverse proxy", "Load balancing", "SSL/TLS termination", "Static & dynamic content"]
  },
  {
    name: "Web Dev",
    icon: "💻",
    description: "Building modern web applications.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "WordPress", "Monitoring Platform"],
    bullets: ["Frontend & backend", "Modern frameworks", "Responsive design", "REST API integration"]
  },
  {
    name: "Database",
    icon: "🗄️",
    description: "Database design and management.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "WordPress", "Conduit Container", "Monitoring Platform"],
    bullets: ["Database design", "SQL & queries", "Migrations", "PostgreSQL & MariaDB"]
  },
  {
    name: "Backend (REST)",
    icon: "⚡",
    description: "Server-side development and RESTful APIs.",
    learnedFrom: "DevSecOps Course - Truck Signs API Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "Conduit Container", "Monitoring Platform"],
    bullets: ["RESTful API design", "Server-side logic", "CRUD operations", "Authentication & authorization"]
  },
  {
    name: "WebSec (OWASP)",
    icon: "🛡️",
    description: "Security best practices and penetration testing.",
    learnedFrom: "DevSecOps Course - Juice Shop Meister Project",
    usedIn: ["Juice Shop Meister"],
    bullets: ["OWASP Top 10", "Penetration testing", "SQLi, XSS & CSRF", "Secure development"]
  },
  {
    name: "WordPress",
    icon: "📝",
    description: "Content management system for websites.",
    learnedFrom: "DevSecOps Course - WordPress Project",
    usedIn: ["WordPress"],
    bullets: ["CMS & themes", "Plugins & extensions", "Content publishing", "Containerized deployment"]
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containerization and application packaging.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "WordPress", "Conduit Container", "Minecraft-Server", "Conduit Deployment", "Monitoring Platform"],
    bullets: ["Containerization", "Images & Dockerfile", "Isolation & portability", "Multi-stage builds"]
  },
  {
    name: "CI/CD",
    icon: "🔄",
    description: "Automated pipelines and deployment strategies.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment", "Monitoring Platform"],
    bullets: ["Pipeline automation", "Build, test, deploy", "Container registry", "Rollout strategies"]
  },
  {
    name: "Orchestration",
    icon: "📦",
    description: "Managing multiple containers at scale.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Baby Tools Shop", "WordPress", "Conduit Container", "Monitoring Platform"],
    bullets: ["Managing multiple containers", "Compose & services", "Network & volumes", "Scaling"]
  },
  {
    name: "DevOps",
    icon: "🚀",
    description: "Development and operations practices.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment", "Monitoring Platform"],
    bullets: ["Bridging dev & ops", "Automation", "Continuous delivery", "Infrastructure as code"]
  },
  {
    name: "GH Actions",
    icon: "⚙️",
    description: "CI/CD workflows and automation.",
    learnedFrom: "DevSecOps Course - Conduit Container Project",
    usedIn: ["Conduit Container", "Conduit Deployment"],
    bullets: ["Workflows in YAML", "Events & triggers", "Jobs & steps", "Secrets & environments"]
  },
  {
    name: "Server Mgmt",
    icon: "🖥️",
    description: "Server administration and maintenance.",
    learnedFrom: "DevSecOps Course - Minecraft-Server Project",
    usedIn: ["Minecraft-Server"],
    bullets: ["Server operations", "Updates & patches", "Logs & monitoring", "Resource management"]
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Backend development and automation.",
    learnedFrom: "DevSecOps Course - Baby Tools Shop Project",
    usedIn: ["Baby Tools Shop", "Truck Signs API", "Conduit Container", "llmsh"],
    bullets: ["Backend & APIs", "Django & frameworks", "Scripts & automation", "Package management"]
  },
  {
    name: "Shell",
    icon: "💻",
    description: "Automation and command-line tools.",
    learnedFrom: "Personal Project - llmsh",
    usedIn: ["llmsh"],
    bullets: ["Bash/Zsh scripts", "CLI tools", "Automation", "Pipeline integration"]
  },
  {
    name: "LLM / AI",
    icon: "🤖",
    description: "AI-powered applications and automation.",
    learnedFrom: "Personal Project - llmsh",
    usedIn: ["llmsh"],
    bullets: ["LLM integration", "APIs & prompts", "AI-powered tools", "Automation with AI"]
  },
  {
    name: "Go",
    icon: "⚡",
    description: "High-performance backend services and APIs.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["High-performance backend services", "APIs & HTTP servers", "Concurrency (goroutines)", "Single binary deployment"]
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Modern interactive user interfaces.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["Components & state", "Modern UI", "Hooks & effects", "Frontend builds"]
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Advanced database administration.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["Relational database", "SQL & performance", "Migrations", "Backup & recovery"]
  },
  {
    name: "Multi-Tenant",
    icon: "🏢",
    description: "Multi-tenant systems with data isolation.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["Multi-tenancy", "Data isolation", "Tenant scoping", "Scalable architecture"]
  },
  {
    name: "Monitoring",
    icon: "📊",
    description: "Monitoring solutions and alerting.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["Metrics & dashboards", "Alerting", "Infrastructure monitoring", "Logs & tracing"]
  },
  {
    name: "Security Scan",
    icon: "🔍",
    description: "Automated security scanning and analysis.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["Automated scans", "Vulnerability analysis", "Dependency checks", "Security reports"]
  },
  {
    name: "2FA",
    icon: "🔒",
    description: "TOTP-based two-factor authentication.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["TOTP-based 2FA", "Authenticator apps", "Secure login", "Recovery options"]
  },
  {
    name: "Background Jobs",
    icon: "⏱️",
    description: "Asynchronous task execution systems.",
    learnedFrom: "Personal Project - Monitoring Platform",
    usedIn: ["Monitoring Platform"],
    bullets: ["Asynchronous tasks", "Job queues", "Retries & error handling", "Scalable execution"]
  }
];

const SKILLS_PER_PAGE_DESKTOP = 9;
const SKILLS_PER_PAGE_MOBILE = 3;

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/** 3–4 bullet points for mobile: from skill.bullets or derived from description */
function getSkillBullets(skill: Skill): string[] {
  if (skill.bullets && skill.bullets.length > 0) {
    return skill.bullets.slice(0, 4);
  }
  const parts = skill.description
    .split(/[.,;]\s+|\s+and\s+|\s*,\s*/i)
    .map((p) => p.trim().replace(/\.+$/, ''))
    .filter((p) => p.length > 0)
    .slice(0, 4);
  return parts;
}

export default function MySkills(): JSX.Element {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const desktopPageCount = Math.ceil(skills.length / SKILLS_PER_PAGE_DESKTOP);
  const desktopSkills = skills.slice(
    desktopPage * SKILLS_PER_PAGE_DESKTOP,
    desktopPage * SKILLS_PER_PAGE_DESKTOP + SKILLS_PER_PAGE_DESKTOP
  );
  const globalStartIndex = desktopPage * SKILLS_PER_PAGE_DESKTOP;

  const skillsChunked = chunk(skills, SKILLS_PER_PAGE_MOBILE);
  const mobilePageCount = skillsChunked.length;

  const handleSkillInteraction = (index: number) => {
    setHoveredSkill(hoveredSkill === index ? null : index);
  };

  const scrollToMobilePage = (pageIndex: number) => {
    setMobilePage(pageIndex);
    const el = scrollRef.current;
    if (el) {
      const slideWidth = el.offsetWidth;
      el.scrollTo({ left: pageIndex * slideWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const page = Math.round(el.scrollLeft / el.offsetWidth);
      setMobilePage(Math.min(page, mobilePageCount - 1));
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, [mobilePageCount]);

  return (
    <section id="my-skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>My Skills</h2>
      {/* Desktop: 3x3 pro Seite, Dots für Seiten */}
      <div className={styles.skillsDesktopWrapper}>
        <div className={styles.skillsGrid}>
          {desktopSkills.map((skill, index) => {
            const globalIndex = globalStartIndex + index;
            return (
              <div
                key={globalIndex}
                className={clsx(styles.skillCard, {
                  [styles.skillCardHovered]: hoveredSkill === globalIndex
                })}
                onMouseEnter={() => setHoveredSkill(globalIndex)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => handleSkillInteraction(globalIndex)}
                onTouchStart={() => handleSkillInteraction(globalIndex)}
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
            );
          })}
        </div>
        <div className={styles.skillsDesktopDots}>
          {Array.from({ length: desktopPageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              className={clsx(styles.skillsDesktopDot, {
                [styles.skillsDesktopDotActive]: i === desktopPage,
              })}
              onClick={() => setDesktopPage(i)}
              aria-label={`Skills page ${i + 1} of ${desktopPageCount}`}
            />
          ))}
        </div>
      </div>
        {/* Mobile: 3 skills per view, stacked vertically (Figma); dots per group */}
        <div className={styles.skillsCarouselWrapper}>
          <div className={styles.skillsCarousel} ref={scrollRef}>
            {skillsChunked.map((chunkSkills, pageIndex) => (
              <div key={pageIndex} className={styles.skillsCarouselSlideGroup}>
                {chunkSkills.map((skill, idxInChunk) => {
                  const globalIndex = pageIndex * SKILLS_PER_PAGE_MOBILE + idxInChunk;
                  return (
                    <div
                      key={globalIndex}
                      className={clsx(styles.skillCard, styles.skillCardMobile, {
                        [styles.skillCardHovered]: hoveredSkill === globalIndex
                      })}
                      onMouseEnter={() => setHoveredSkill(globalIndex)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => handleSkillInteraction(globalIndex)}
                      onTouchStart={() => handleSkillInteraction(globalIndex)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${skill.name} - Click to see details`}
                    >
                      <div className={styles.skillCardFront}>
                        <div className={styles.skillCardMobileLeft}>
                          <div className={styles.skillIcon}>
                            {skill.icon || skill.name.charAt(0).toUpperCase()}
                          </div>
                          <h3 className={styles.skillName}>{skill.name}</h3>
                        </div>
                        <ul className={styles.skillCardMobileBullets}>
                          {getSkillBullets(skill).map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
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
                  );
                })}
              </div>
            ))}
          </div>
          <div className={styles.skillsCarouselDots}>
            {Array.from({ length: mobilePageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                className={clsx(styles.skillsCarouselDot, {
                  [styles.skillsCarouselDotActive]: i === mobilePage,
                })}
                onClick={() => scrollToMobilePage(i)}
                aria-label={`Skills page ${i + 1} of ${mobilePageCount}`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}
