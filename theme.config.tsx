import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Hayo Documentation</span>,
  docsRepositoryBase: 'https://github.com/Hayo-AI/docs/blob/draft',
  footer: {
    text: 'Hayo Documentation Site',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ]
}

export default config
