# Docusaurus Portfolio

A personal portfolio website built with Docusaurus, React, and TypeScript. This portfolio showcases projects, skills, and documentation as part of the DevSecOps course. The portfolio is integrated with the Docusaurus blog framework, allowing for seamless integration of project documentations.

## Repository Description

This repository contains a React-based portfolio website that displays various sections including skills, projects, and contact information. Each section is implemented as a modular React component using CSS Modules for styling. The portfolio is fully responsive, supports both light and dark themes, and is designed to be hosted on GitHub Pages.

## Table of Contents

- [Docusaurus Portfolio](#docusaurus-portfolio)
  - [Repository Description](#repository-description)
  - [Table of Contents](#table-of-contents)
  - [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [How to Start](#how-to-start)
    - [Local Development](#local-development)
    - [Understanding Portfolio Components](#understanding-portfolio-components)
  - [Usage](#usage)
    - [Configuring Portfolio Components](#configuring-portfolio-components)
    - [Adding Your Own Projects](#adding-your-own-projects)
    - [Adding Your Own Skills](#adding-your-own-skills)
    - [Customizing the Header](#customizing-the-header)
    - [Building the Project](#building-the-project)
    - [Deployment](#deployment)
      - [Deploying to GitHub Pages](#deploying-to-github-pages)
      - [Deploying with Docker and NGINX](#deploying-with-docker-and-nginx)
  - [Component Overview](#component-overview)
  - [Repository Structure](#repository-structure)
  - [Technologies Used](#technologies-used)

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [pnpm](https://pnpm.io/) (package manager) or npm
- [Git](https://git-scm.com/) (for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/4gh0rn/dev-blog.git
   cd dev-blog
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

   Or using npm:

   ```bash
   npm install
   ```

### How to Start

After installation, you can start the project in different ways:

**Option 1: Local Development Server (Recommended for Development)**
```bash
pnpm start
# or
npm start
```
Then open `http://localhost:3000/portfolio` in your browser.

**Option 2: Docker Development Container (Hot-reload)**
```bash
make docker-dev-up
# or
docker compose --profile dev up -d docusaurus-dev
```
Then open `http://localhost:3001/portfolio` in your browser.

**Option 3: Production Build with Docker**
```bash
make docker-compose-up
# or
docker compose up -d
```
Then open `http://localhost:3000/portfolio` in your browser.

### Local Development

1. Start the development server:

   ```bash
   pnpm start
   ```

   Or using npm:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000/portfolio` to view the portfolio page.

   The development server supports hot-reload, so most changes are reflected immediately without restarting the server.

3. Build for production:

   ```bash
   pnpm build
   ```

   This generates static content in the `build` directory ready for deployment.

### Understanding Portfolio Components

The portfolio consists of the following React components, each located in `src/components/`:

- **Header**: Fixed navigation header with smooth scrolling to sections
- **Hero**: Introduction section with profile image and call-to-action
- **MySkills**: Interactive skill cards with flip animations
- **Projects**: Project showcase with images, descriptions, and links
- **Contact**: Contact information section with social links
- **Footer**: Footer section with copyright and social links
- **ScrollToTop**: Utility button to scroll back to top

Each component is self-contained with its own TypeScript interface and CSS Module styles.

## Usage

### Configuring Portfolio Components

#### Hero Component

Edit `src/components/Hero/index.tsx` to customize:

- Name, title, and description
- Profile image URL
- Contact button text and behavior

```typescript
<Hero
  name="Your Name"
  title="Your Title"
  description="Your description"
  imageUrl="/img/your-profile.jpg"
/>
```

#### MySkills Component

Edit `src/components/MySkills/index.tsx` to add or modify skills:

```typescript
const skills: Skill[] = [
  {
    name: "React",
    description: "Your skill description",
    learnedFrom: "Where you learned it",
    usedIn: ["Project 1", "Project 2"]
  },
  // Add more skills...
];
```

#### Projects Component

Edit `src/components/Projects/index.tsx` to add or modify projects:

```typescript
const projects: Project[] = [
  {
    title: "Project Title",
    description: "Project description",
    docLink: "/docs/projects/your-project",
    githubLink: "https://github.com/yourusername/project",
    skills: ["React", "TypeScript"],
    imageUrl: "/img/projects/project-image.jpg"
  },
  // Add more projects...
];
```

#### Contact Component

Edit `src/components/Contact/index.tsx` to update contact information:

```typescript
<Contact
  email="your.email@example.com"
  github="https://github.com/yourusername"
  linkedin="https://linkedin.com/in/yourprofile"
  message="Your contact message"
/>
```

#### Footer Component

Edit `src/components/Footer/index.tsx` to update footer information:

```typescript
<Footer
  copyright="© 2024 Your Name. All rights reserved."
  github="https://github.com/yourusername"
  linkedin="https://linkedin.com/in/yourprofile"
  email="your.email@example.com"
/>
```

### Adding Your Own Projects

1. Add project images to `static/img/projects/`
2. Add project documentation to `docs/projects/`
3. Update the `projects` array in `src/components/Projects/index.tsx`
4. Ensure project images are optimized (recommended: max 1200px width, WebP or JPG format)

### Adding Your Own Skills

1. Edit the `skills` array in `src/components/MySkills/index.tsx`
2. Each skill should include:
   - `name`: Skill name
   - `description`: Brief description
   - `learnedFrom`: Where/how you learned it
   - `usedIn`: Array of project names where you used this skill

### Customizing the Header

The Header component can be customized in `src/components/Header/index.tsx`:

```typescript
<Header
  logo="/img/logo.svg"
  logoAlt="Your Logo"
  navItems={[
    { label: 'Home', href: '#about-me', anchor: true },
    { label: 'Skills', href: '#my-skills', anchor: true },
    // Add more navigation items...
  ]}
/>
```

### Building the Project

To build the project for production:

```bash
pnpm build
# or
npm run build
```

This generates static files in the `build` directory that can be deployed to any static hosting service.

### Deployment

The project can be deployed in several ways:

#### Deploying to GitHub Pages

1. Ensure your `docusaurus.config.ts` is configured for GitHub Pages:

   ```typescript
   url: 'https://yourusername.github.io',
   baseUrl: '/repository-name/',
   organizationName: 'yourusername',
   projectName: 'repository-name',
   ```

2. Build the site:

   ```bash
   pnpm build
   ```

3. Deploy to GitHub Pages:

   ```bash
   USE_SSH=true pnpm deploy
   ```

   Or without SSH:

   ```bash
   GIT_USER=yourusername pnpm deploy
   ```

4. The portfolio will be available at `https://yourusername.github.io/repository-name/portfolio`

#### Deploying with Docker and NGINX

The project includes a production-ready Docker setup with NGINX for serving static files.

**Prerequisites:**
- Docker and Docker Compose installed
- Environment variables configured (optional, defaults are provided)

**Option 1: Using Docker Compose (Recommended)**

1. Build and start the production container:

   ```bash
   make docker-compose-up
   # or
   docker compose up -d
   ```

2. The site will be available at `http://localhost:3000`

3. To stop the container:

   ```bash
   make docker-compose-down
   # or
   docker compose down
   ```

**Option 2: Using Docker directly**

1. Build the Docker image:

   ```bash
   make docker-build
   # or
   docker build -t docusaurus-blog:latest .
   ```

2. Run the container:

   ```bash
   make docker-run
   # or
   docker run -d --name docusaurus-blog -p 3000:80 docusaurus-blog:latest
   ```

3. The site will be available at `http://localhost:3000`

**Configuration:**

You can customize the deployment by setting environment variables in a `.env` file or passing them to Docker Compose:

```bash
# Example .env file
BLOG_ENABLED=false
DEPLOYMENT_URL=https://yourdomain.com
BASE_URL=/
GITHUB_ORG=yourusername
GITHUB_PROJECT=dev-blog
HOST_PORT=3000
```

**NGINX Configuration:**

The project includes a custom NGINX configuration (`nginx.conf`) with:
- Security headers (CSP, X-Frame-Options, etc.)
- Gzip compression
- Static asset caching
- SPA routing support
- Health check endpoint at `/health`

The Docker image uses a multi-stage build:
1. **Builder stage**: Installs dependencies and builds the Docusaurus site
2. **Runner stage**: Uses NGINX Alpine to serve the static files

**Production Features:**
- Non-root user execution
- Read-only filesystem
- Resource limits
- Health checks
- Security hardening

## Component Overview

### Header Component (`src/components/Header/`)

- **Purpose**: Fixed navigation header with smooth scrolling
- **Features**: Responsive mobile menu, theme support, scroll effects
- **Props**: `logo`, `logoAlt`, `navItems`

### Hero Component (`src/components/Hero/`)

- **Purpose**: Introduction section with profile and call-to-action
- **Features**: Responsive layout, gradient background, smooth scroll to contact
- **Props**: `name`, `title`, `description`, `imageUrl`

### MySkills Component (`src/components/MySkills/`)

- **Purpose**: Display skills with interactive flip cards
- **Features**: Hover/touch animations, detailed information on back
- **Data**: Array of `Skill` objects with name, description, learnedFrom, usedIn

### Projects Component (`src/components/Projects/`)

- **Purpose**: Showcase projects with images and links
- **Features**: Responsive grid, skill tags, documentation and GitHub links
- **Data**: Array of `Project` objects with title, description, links, skills, image

### Contact Component (`src/components/Contact/`)

- **Purpose**: Contact information and social links
- **Features**: Gradient background, responsive button layout
- **Props**: `email`, `github`, `linkedin`, `message`

### Footer Component (`src/components/Footer/`)

- **Purpose**: Footer section with copyright and social links
- **Features**: Responsive layout, theme support
- **Props**: `copyright`, `github`, `linkedin`, `email`

### ScrollToTop Component (`src/components/ScrollToTop/`)

- **Purpose**: Utility button to scroll back to top
- **Features**: Appears on scroll, smooth animation

## Repository Structure

```
dev-blog/
├── src/
│   ├── components/          # React components
│   │   ├── Header/          # Navigation header
│   │   ├── Hero/            # Hero section
│   │   ├── MySkills/        # Skills section
│   │   ├── Projects/        # Projects section
│   │   ├── Contact/         # Contact section
│   │   ├── Footer/          # Footer section
│   │   └── ScrollToTop/     # Scroll to top button
│   ├── css/
│   │   └── custom.css       # Global styles and theme
│   └── pages/
│       └── portfolio.tsx    # Portfolio page
├── docs/                    # Documentation files
├── static/                  # Static assets (images, etc.)
├── docusaurus.config.ts     # Docusaurus configuration
└── package.json             # Dependencies
```

## Technologies Used

- **React**: UI framework for building components
- **TypeScript**: Type-safe development
- **Docusaurus**: Static site generator and framework
- **CSS Modules**: Scoped component styling
- **GitHub Pages**: Hosting platform

## Additional Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Project FAQ](https://developer-akademie-devsecopskurs.github.io/dso-faq-site/docs/projects/docusaurus-portfolio/description)
