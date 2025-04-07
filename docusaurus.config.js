// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BasicSwap Docs Hub',
  tagline: 'Comprehensive documentation for BasicSwap DEX',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://basicswapdex.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'basicswap', // Usually your GitHub org/user name.
  projectName: 'basicswap-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/basicswap/basicswap-docs/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Set dark mode as default to match BasicSwap interface
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'BasicSwap Logo',
          src: '/img/basicswap-logo.svg',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            href: 'https://github.com/basicswap/basicswap',
            label: 'GitHub',
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
                label: 'About BasicSwap',
                to: '/docs/intro',
              },
              {
                label: 'User Guides',
                to: 'docs/category/user-guides',
              },
              {
                label: 'Resources',
                to: 'docs/category/resources',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Element',
                href: 'https://matrix.to/#/#basicswap:matrix.org',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/watch?v=7eEZ-a00uSM&list=PLtbTcMbZZKfxAswJnqlh_KbHvWCUFqFVF',
              },
              {
                label: 'X (formerly Twitter)',
                href: 'https://x.com/basicswapdex',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://basicswapdex.com',
              },
              {
                label: 'Blog',
                to: 'https://particl.news/tag/basicswap/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/basicswap',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BasicSwap community.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
