const fs = require("node:fs");
const path = require("node:path");

const mockFontPath = path.join(__dirname, ".next-font-mock.cjs");
const mockResponses = {
  "https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap": "@font-face {\n  font-family: 'Lora Mock';\n  src: local('Lora');\n}\n",
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap": "@font-face {\n  font-family: 'Montserrat Mock';\n  src: local('Montserrat');\n}\n"
};
fs.writeFileSync(mockFontPath, `module.exports = ${JSON.stringify(mockResponses, null, 2)};\n`, "utf8");
process.env.NEXT_FONT_GOOGLE_MOCKED_RESPONSES = mockFontPath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async rewrites() { return []; },
  experimental: { turbo: { rules: {} } }
};
module.exports = nextConfig;
