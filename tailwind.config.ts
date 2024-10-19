import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/styles/**/*.{css}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
         },
      },
   },
   plugins: [],
};
export default config;
