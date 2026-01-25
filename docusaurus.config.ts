import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig}  from "dotenv";

dotenvconfig();

/* TODO: change to read configuration from environment */
const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')

const config: Config = {
  title: 'Dev Blog',
  tagline: 'Uwe Wohlleber',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.DEPLOYMENT_URL ?? "https://4gh0rn.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ?? "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORGANIZATION_NAME ?? '4gh0rn', // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME ?? 'dev-blog', // Usually your repo name.

  deploymentBranch: process.env.DEPLOYMENT_BRANCH ?? 'gh-pages',
  
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/4gh0rn/dev-blog',
        },
        blog: blogEnabled ? 
          {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/4gh0rn/dev-blog',
            // Useful options to enforce blogging best practices
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          }
          : false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Uwe Wohlleber',
      logo: {
        alt: 'Uwe Wohlleber Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/portfolio',
          label: 'Portfolio',
          position: 'left',
        },
        {
          href: 'https://github.com/4gh0rn/dev-blog',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Portfolio',
              to: '/portfolio',
            },
            {
              label: 'Projects',
              to: '/docs/projects/overview',
            },
            {
              label: 'Documentation',
              to: '/docs/guides/intro',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'V-Server Setup',
              href: 'https://github.com/4gh0rn/v-server-setup',
            },
            {
              label: 'AI Chatbot Starter',
              href: 'https://github.com/4gh0rn/ai-chatbot-starter',
            },
            {
              label: 'Conduit Container',
              href: 'https://github.com/4gh0rn/conduit-container',
            },
            {
              label: 'Docusaurus Portfolio',
              href: 'https://github.com/4gh0rn/dev-blog',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub Profile',
              href: 'https://github.com/4gh0rn',
            },
            {
              label: 'Repository',
              href: 'https://github.com/4gh0rn/dev-blog',
            },
            {
              label: 'brsk.sh',
              href: 'https://brsk.sh',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Uwe Wohlleber. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl'],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    mermaid: {
      theme: {light: 'default', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};


if (blogEnabled) {
  (config.themeConfig.navbar as any).items.push({to: '/blog', label: 'Blog', position: 'left'});
  (config.themeConfig.footer as any).links[2].items.push({to: '/blog', label: 'Blog'});
}

export default config;
