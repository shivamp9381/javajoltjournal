// // @ts-check
// // `@type` JSDoc annotations allow editor autocompletion and type checking
// // (when paired with `@ts-check`).
// // See: https://docusaurus.io/docs/api/docusaurus-config

// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Java Jolt Journal',
//   tagline: 'Clean notes. Fast recall.',
//   favicon: 'img/favicon.ico',

//   future: {
//     v4: true,
//   },

//   url: 'https://shivamp9381.github.io',
//   baseUrl: '/javajoltjournal/',

//   organizationName: 'shivamp9381',
//   projectName: 'javajoltjournal',

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   stylesheets: [
//     {
//       href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
//       type: 'text/css',
//       integrity:
//         'sha384-XWX6o0RNZn3rQX1sGj5Bzq1xgYG+uG2y4c2bH3Jp//1F2u8pV3Yf6nYtjrfu3y4g',
//       crossorigin: 'anonymous',
//     },
//   ],

//   markdown: {
//     mermaid: true,
//   },

//   themes: ['@docusaurus/theme-mermaid'],

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           editUrl:
//             'https://github.com/shivamp9381/javajoltjournal/tree/main/',
//         },
//         blog: false, // disable blog, since we are only using docs for DSA notes
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],

//   plugins: [
//     [
//       require.resolve('@easyops-cn/docusaurus-search-local'),
//       {
//         hashed: true,
//         indexDocs: true,
//         indexBlog: false,
//         docsRouteBasePath: '/docs',
//         highlightSearchTermsOnTargetPage: true,
//       },
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       image: 'img/docusaurus-social-card.jpg',
//       navbar: {
//         title: 'Java Jolt Journal',
//         logo: {
//           alt: 'DSA Logo',
//           src: 'img/logo.svg',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Docs',
//           },
//           {
//             href: 'https://github.com/shivamp9381/javajoltjournal',
//             label: 'GitHub',
//             position: 'right',
//           },
//           {
//             type: 'search',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Topics',
//             items: [
//               { label: 'Arrays', to: '/docs/arrays/' },
//               { label: 'DP', to: '/docs/dp/' },
//               { label: 'Graphs', to: '/docs/graphs/' },
//               { label: 'Trees', to: '/docs/trees/' },
//               { label: 'Strings', to: '/docs/strings/' },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               { label: 'GitHub', href: 'https://github.com/shivamp9381' },
//               { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-pandey-aa6922246/' },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               { label: 'About Java Jolt Journal', to: '/docs/intro' },
//               { label: 'Contribute', href: 'https://github.com/shivamp9381/javajoltjournal' },
//             ],
//           },
//         ],
//         copyright: `© ${new Date().getFullYear()} Java Jolt Jornal. Built with ❤️ by Shivam.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//         additionalLanguages: [
//           'cpp',
//           'java',
//           'python',
//           'csharp',
//           'kotlin',
//           'rust',
//         ],
//       },
//     }),
// };

// export default config;



// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Java Jolt Journal',
  tagline: 'Clean notes. Fast recall.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://javajoltjournal.vercel.app',
  baseUrl: '/',

  organizationName: 'shivamp9381', // GitHub username
  projectName: 'javajoltjournal',  // Repo name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-XWX6o0RNZn3rQX1sGj5Bzq1xgYG+uG2y4c2bH3Jp//1F2u8pV3Yf6nYtjrfu3y4g',
      crossorigin: 'anonymous',
    },
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/shivamp9381/javajoltjournal/tree/main/',
        },
        blog: false, // disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Java Jolt Journal',
        logo: {
          alt: 'DSA Logo',
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
            href: 'https://github.com/shivamp9381/javajoltjournal',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Topics',
            items: [
              { label: 'Arrays', to: '/docs/arrays/' },
              { label: 'DP', to: '/docs/dp/' },
              { label: 'Graphs', to: '/docs/graphs/' },
              { label: 'Trees', to: '/docs/trees/' },
              { label: 'Strings', to: '/docs/strings/' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/shivamp9381' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-pandey-aa6922246/' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'About Java Jolt Journal', to: '/docs/intro' },
              { label: 'Contribute', href: 'https://github.com/shivamp9381/javajoltjournal' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Java Jolt Journal. Built with ❤️ by Shivam.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'cpp',
          'java',
          'python',
          'csharp',
          'kotlin',
          'rust',
        ],
      },
    }),
};

export default config;
