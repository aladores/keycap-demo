import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://a.ladores.github.io',
  base: '/keycap-demo',
  integrations: [preact()]
});