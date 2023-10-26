import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import fuse from "astro-fuse";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [preact(), fuse()],
});