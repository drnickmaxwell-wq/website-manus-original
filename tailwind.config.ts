const config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./contexts/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      /* === SMH token mapping === */
      colors: {
        smh: {
          magenta: "var(--smh-primary-magenta)",
          teal: "var(--smh-primary-teal)",
          gold: "var(--smh-accent-gold)",
          bg: "var(--smh-bg)",
          text: "var(--smh-text)",
          dim: "var(--smh-text-dim)",
          surface: "var(--smh-surface)",
        },
      },
      boxShadow: {
        "smh-gold": "var(--glow-gold)",
        "smh-light": "var(--shadow-elevate-light)",
        "smh-dark": "var(--shadow-elevate-dark)",
      },
      fontFamily: {
        heading: ['var(--smh-font-heading)'],
        body: ['var(--smh-font-body)'],
      },
    },
  },
  plugins: [],
};

export default config;

