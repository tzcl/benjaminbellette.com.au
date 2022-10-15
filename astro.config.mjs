import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    svelte(),
    tailwind({
      // Disable injecting a basic `base.css` on every page
      config: { applyBaseStyles: false },
    }),
  ],
});
