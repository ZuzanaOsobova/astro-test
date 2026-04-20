// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://zuzanaosobova.github.io',
  base: 'astro-test',
  integrations: [preact()],
});
//github pages nespolupracují s link systémem a místo indexu ukazují readme, prostě na to zatím kašlu, tohle vymyslím až bych někdy reálně publikovala webovky