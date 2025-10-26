export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./styles/**/*.{css,scss}"],
  safelist: [
    "before:bg-gradient-to-br",
    "after:mix-blend-overlay",
    "before:absolute",
    "after:absolute",
    "before:content-['']",
    "after:content-['']",
  ],
};
