import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '시작하기',
      collapsed: false,
      items: ['quick-start', 'tutorial'],
    },
    {
      type: 'category',
      label: '사용법',
      collapsed: false,
      items: [
        'usage/outfit-settings',
        'usage/wet-settings',
        'usage/wet-start-points',
        'usage/see-through-protection',
        'usage/in-game-menu',
        'performance',
      ],
    },
    {
      type: 'category',
      label: '문제 해결',
      collapsed: false,
      items: ['troubleshooting', 'compatibility'],
    },
    {
      type: 'category',
      label: '고급·참고',
      collapsed: false,
      items: ['advanced', 'technical-specifications', 'avatar-changes'],
    },
    'update-changelog',
    'license-activation',
    'license',
  ],
};

export default sidebars;
