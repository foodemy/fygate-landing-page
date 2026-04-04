// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.fygate.foodemy.in",
  base: "/",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Merriweather",
      cssVariable: "--font-merriweather",
      weights: [400, 500, 600, 700, 800, 900],
    },
    {
      provider: fontProviders.google(),
      name: "Google Sans",
      cssVariable: "--font-google-sans",
      weights: [400, 500, 600, 700, 800, 900],
    },
  ],
});
