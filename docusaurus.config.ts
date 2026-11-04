import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import product from './src/product';

const config: Config = {
  title: product.name,
  tagline: product.copy.ko.sentence,
  favicon: 'img/cooki-icon-32.png',
  future: {v4: true},
  url: 'https://cookipiece.github.io',
  baseUrl: '/RealWetSystem-Docs/',
  organizationName: 'cookipiece',
  projectName: 'RealWetSystem-Docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'ja', 'en'],
    localeConfigs: {
      ko: {label: '한국어', htmlLang: 'ko-KR'},
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {customCss: ['./src/css/custom.css', './src/css/product.css']},
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        language: ['ko', 'ja', 'en'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {name: 'keywords', content: `VRChat, ${product.name}, RealWet, avatar, clothing, wet, documentation`},
    ],
    colorMode: {respectPrefersColorScheme: true},
    announcementBar: {
      // The id follows the version, so a visitor who closed an older version's bar sees this one.
      id: `current_version_${product.version.replace(/\./g, '_')}`,
      content: `<strong>${product.name} v${product.version}</strong>`,
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: false,
      title: product.name,
      logo: {alt: 'CookiTools', src: 'img/cooki-icon-64.png', width: 24, height: 24},
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: '문서'},
        {to: '/docs/troubleshooting', label: '문제 해결', position: 'left'},
        {type: 'custom-cookiFamily', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '문서',
          items: [
            {label: '빠른 시작', to: '/docs/quick-start'},
            {label: '초보자 튜토리얼', to: '/docs/tutorial'},
            {label: '호환성', to: '/docs/compatibility'},
            {label: '문제 해결', to: '/docs/troubleshooting'},
          ],
        },
        {
          title: '제품',
          items: [
            {label: '업데이트 내역', to: '/docs/update-changelog'},
            {label: '구매 인증', to: '/docs/license-activation'},
            {label: '이용 조건 및 라이선스', to: '/docs/license'},
          ],
        },
        {
          title: '프로젝트',
          items: [
            {label: 'GitHub', href: 'https://github.com/cookipiece/RealWetSystem-Docs'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Cooki · CookiTools`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.vsDark},
  } satisfies Preset.ThemeConfig,
};

export default config;
