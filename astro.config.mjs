import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import astroAws from "@astro-aws/adapter"
// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [preact()],
  adapter: astroAws(),

});