import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import compress from "astro-compress";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    svelte(),
    image(),
    tailwind({
      // Disable injecting a basic `base.css` on every page
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    compress(),
    critters(),
  ],
});
