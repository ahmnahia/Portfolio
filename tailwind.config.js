/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "blue-050": "#DCEEFB",
        "blue-100": "#B6E0FE",
        "blue-200": "#84C5F4",
        "blue-300": "#62B0E8",
        "blue-400": "#4098D7",
        "blue-500": "#2680C2",
        "blue-600": "#186FAF",
        "blue-700": "#0F609B",
        "blue-800": "#0A558C",
        "blue-900": "#003E6B",
        "yellow-vivid-050": "#FFFBEA",
        "yellow-vivid-100": "#FFF3C4",
        "yellow-vivid-200": "#FCE588",
        "yellow-vivid-300": "#FADB5F",
        "yellow-vivid-400": "#F7C948",
        "yellow-vivid-500": "#F0B429",
        "yellow-vivid-600": "#DE911D",
        "yellow-vivid-700": "#CB6E17",
        "yellow-vivid-800": "#B44D12",
        "yellow-vivid-900": "#8D2B0B",
        "blue-grey-050": "#F0F4F8",
        "blue-grey-100": "#D9E2EC",
        "blue-grey-200": "#BCCCDC",
        "blue-grey-300": "#9FB3C8",
        "blue-grey-400": "#829AB1",
        "blue-grey-500": "#627D98",
        "blue-grey-600": "#486581",
        "blue-grey-700": "#334E68",
        "blue-grey-800": "#243B53",
        "blue-grey-900": "#102A43",
        "cyan-050": "#E0FCFF",
        "cyan-100": "#BEF8FD",
        "cyan-200": "#87EAF2",
        "cyan-300": "#54D1DB",
        "cyan-400": "#38BEC9",
        "cyan-500": "#2CB1BC",
        "cyan-600": "#14919B",
        "cyan-700": "#0E7C86",
        "cyan-800": "#0A6C74",
        "cyan-900": "#044E54",
        "red-050": "#FFEEEE",
        "red-100": "#FACDCD",
        "red-200": "#F29B9B",
        "red-300": "#E66A6A",
        "red-400": "#D64545",
        "red-500": "#BA2525",
        "red-600": "#A61B1B",
        "red-700": "#911111",
        "red-800": "#780A0A",
        "red-900": "#610404",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-90%)" }, // move up
          "100%": { transform: "translateY(0%)" }, // move back down
        },
        "opacity-on-image-change": {
          "0%": { opacity: 0 },
          // "50%": { opacity: 0 }, // move up
          "100%": { opacity: 1 }, // move back down
        },
      },
      animation: {
        "slide-left": "slide-left 40s linear infinite",
        "slide-up": "slide-up 30s linear infinite",
        "opacity-on-image-change":
          "opacity-on-image-change 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
