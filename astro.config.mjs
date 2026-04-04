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
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: [400, 500, 600, 700, 800, 900],
    },
    {
      provider: fontProviders.google(),
      name: "Google Sans",
      cssVariable: "--font-google-sans",
      weights: [400, 500, 600, 700, 800, 900],
    },
    {
      provider: fontProviders.googleicons(),
      name: "Material Symbols Outlined",
      cssVariable: "--font-googleicons",
      options: {
        experimental: {
          glyphs: [
            "arrow_downward",
            "play_circle",
            "check_small",
            "play_arrow",
          ],
        },
      },
    },
  ],
});
