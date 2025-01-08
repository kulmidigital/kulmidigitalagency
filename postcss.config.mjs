import purgecss from "@fullhuman/postcss-purgecss";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [
              "./app/**/*.{js,ts,jsx,tsx}",
              "./pages/**/*.{js,ts,jsx,tsx}",
              "./components/**/*.{js,ts,jsx,tsx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: ["html", "body", "dark"],
              deep: [/^dark:/],
              greedy: [
                /^text-/,
                /^bg-/,
                /^border-/,
                /^hover:/,
                /^focus:/,
                /^active:/,
                /^disabled:/,
                /^group-hover:/,
                /^dark:/,
                /^motion-/,
                /^animate-/,
              ],
            },
          },
        }
      : {}),
  },
};

export default config;
