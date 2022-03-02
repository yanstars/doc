
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/fe',
    component: ComponentCreator('/fe','e05'),
    routes: [
      {
        path: '/fe/',
        component: ComponentCreator('/fe/','9d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/os/Centos',
        component: ComponentCreator('/fe/os/Centos','1fd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/os/Deepin',
        component: ComponentCreator('/fe/os/Deepin','fd8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/os/Macos',
        component: ComponentCreator('/fe/os/Macos','9ea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/os/osindex',
        component: ComponentCreator('/fe/os/osindex','0ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/os/Ubuntu',
        component: ComponentCreator('/fe/os/Ubuntu','3fe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/os/Windows',
        component: ComponentCreator('/fe/os/Windows','bc5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/vue/vnodeanddiff',
        component: ComponentCreator('/fe/vue/vnodeanddiff','5c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/vue/Vue',
        component: ComponentCreator('/fe/vue/Vue','72e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fe/vue/Vue3',
        component: ComponentCreator('/fe/vue/Vue3','ca9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/java',
    component: ComponentCreator('/java','897'),
    routes: [
      {
        path: '/java/',
        component: ComponentCreator('/java/','7fb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/one/congratulations',
        component: ComponentCreator('/java/one/congratulations','415'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/one/create-a-blog-post',
        component: ComponentCreator('/java/one/create-a-blog-post','ff4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/one/create-a-document',
        component: ComponentCreator('/java/one/create-a-document','29a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/one/create-a-page',
        component: ComponentCreator('/java/one/create-a-page','977'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/one/deploy-your-site',
        component: ComponentCreator('/java/one/deploy-your-site','87c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/one/markdown-features',
        component: ComponentCreator('/java/one/markdown-features','bc8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/two/manage-docs-versions',
        component: ComponentCreator('/java/two/manage-docs-versions','4b8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/java/two/translate-your-site',
        component: ComponentCreator('/java/two/translate-your-site','6c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
