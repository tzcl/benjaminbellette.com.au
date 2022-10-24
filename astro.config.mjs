import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // Deployment URL
  site: "https://www.benjaminbellette.com.au",
  // Set the route matching behaviour of the dev server
  // (Netlify injects a trailing slash)
  trailingSlash: "always",
  integrations: [
    react(),
    svelte(),
    image({
      // Use sharp instead of squoosh
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    tailwind({
      // Disable injecting a basic `base.css` on every page
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    critters(),
  ],
});
