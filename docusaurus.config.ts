import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig}  from "dotenv";
import * as fs from 'fs';
import * as path from 'path';

dotenvconfig();

// Check if blog posts exist (files other than authors.yml and tags.yml)
const blogDir = path.join(__dirname, 'blog');
const hasBlogPosts = fs.existsSync(blogDir) && 
  fs.readdirSync(blogDir).some(file => 
    (file.endsWith('.md') || file.endsWith('.mdx') || fs.statSync(path.join(blogDir, file)).isDirectory()) &&
    !['authors.yml', 'tags.yml'].includes(file)
  );

// Blog is only enabled if BLOG_ENABLED is true AND blog posts exist
const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true') && hasBlogPosts;

const config: Config = {
  title: 'Dev Sec Ops Blog',
  tagline: '4gh0rn',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.DEPLOYMENT_URL ?? "https://4gh0rn.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ?? "/dev-blog/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.GITHUB_ORG ?? '4gh0rn',
  projectName: process.env.GITHUB_PROJECT ?? 'dev-blog',
  deploymentBranch: process.env.DEPLOYMENT_BRANCH ?? 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

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
    navbar: {
      title: '4gh0rn',
      logo: {
        alt: '4gh0rn Logo',
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
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/projects/overview',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'My Blog',
              href: 'https://brsk.sh',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/4gh0rn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Uwe Wohlleber (4gh0rn).`,
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
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        themeVariables: {
          light: {
            primaryColor: '#2563EB',
            primaryTextColor: '#1E293B',
            primaryBorderColor: '#1D4ED8',
            lineColor: '#64748B',
            secondaryColor: '#10B981',
            tertiaryColor: '#F8FAFC',
            background: '#FFFFFF',
            mainBkg: '#FFFFFF',
            secondBkg: '#F1F5F9',
            textColor: '#1E293B',
            border1: '#E2E8F0',
            border2: '#CBD5E1',
            noteBkgColor: '#F8FAFC',
            noteTextColor: '#1E293B',
            noteBorderColor: '#CBD5E1',
            actorBorder: '#1D4ED8',
            actorBkg: '#DBEAFE',
            actorTextColor: '#1E293B',
            actorLineColor: '#1D4ED8',
            labelBoxBkgColor: '#DBEAFE',
            labelBoxBorderColor: '#1D4ED8',
            labelTextColor: '#1E293B',
            loopTextColor: '#1E293B',
            activationBorderColor: '#1D4ED8',
            activationBkgColor: '#DBEAFE',
            sequenceNumberColor: '#FFFFFF',
            sectionBkgColor: '#F1F5F9',
            altBkgColor: '#F8FAFC',
            clusterBkg: '#F1F5F9',
            clusterBorder: '#CBD5E1',
            defaultLinkColor: '#2563EB',
            titleColor: '#1E293B',
            edgeLabelBackground: '#FFFFFF',
            compositeBackground: '#F8FAFC',
            compositeBorder: '#CBD5E1',
          },
          dark: {
            primaryColor: '#1E3A8A',
            primaryTextColor: '#E2E8F0',
            primaryBorderColor: '#3B82F6',
            lineColor: '#64748B',
            secondaryColor: '#065F46',
            tertiaryColor: '#1E293B',
            background: '#0F172A',
            mainBkg: '#1E293B',
            secondBkg: '#334155',
            textColor: '#E2E8F0',
            border1: '#475569',
            border2: '#64748B',
            noteBkgColor: '#1E293B',
            noteTextColor: '#E2E8F0',
            noteBorderColor: '#475569',
            actorBorder: '#3B82F6',
            actorBkg: '#1E3A8A',
            actorTextColor: '#E2E8F0',
            actorLineColor: '#3B82F6',
            labelBoxBkgColor: '#1E3A8A',
            labelBoxBorderColor: '#3B82F6',
            labelTextColor: '#E2E8F0',
            loopTextColor: '#E2E8F0',
            activationBorderColor: '#3B82F6',
            activationBkgColor: '#1E3A8A',
            sequenceNumberColor: '#0F172A',
            sectionBkgColor: '#334155',
            altBkgColor: '#1E293B',
            clusterBkg: '#334155',
            clusterBorder: '#475569',
            defaultLinkColor: '#60A5FA',
            titleColor: '#E2E8F0',
            edgeLabelBackground: '#1E293B',
            compositeBackground: '#1E293B',
            compositeBorder: '#475569',
          },
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};


if (blogEnabled) {
  (config.themeConfig.navbar as any).items.push({to: '/blog', label: 'Blog', position: 'left'});
  (config.themeConfig.footer as any).links[2].items.push({to: '/blog', label: 'Blog'});
}

export default config;
