import baseConfig from "./tailwind.config.base.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    "../../apps/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
};

