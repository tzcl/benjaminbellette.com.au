import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), svelte(), tailwind()]
});