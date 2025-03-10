import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#D42427",
        base: {
          white: "#FFFFFF",
          black: "#000000",
          transparent: "rgba(255, 255, 255, 0)",
        },
        brand: {
          primary: "#D44227",
          50: "#FEEFE2",
          100: "#FEE2E2",
          200: "#FECACB",
          300: "#FBA6A7",
          400: "#F77274",
          500: "#EE5A58",
          600: "#D44227",
          700: "#BB1D20",
          800: "#981C1E",
          900: "#7E1E20",
          950: "#440B0C",
        },
        grey: {
          primary: "#262626",
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#262626",
          dark: {
            primary: "#313133",
            50: "#F5F5F6",
            100: "#E6E6E7",
            200: "#CFC0D2",
            300: "#AEAFB2",
            400: "#85868B",
            500: "#6A6B70",
            600: "#5A5B60",
            700: "#4D4D51",
            800: "#3D3D3F",
            900: "#313133",
            950: "#252527",
          },
        },
        blue: {
          primary: "#464EBD",
          50: "#F2F4FC",
          100: "#E3E6F6",
          200: "#CDD4F0",
          300: "#AAB7E6",
          400: "#8192D9",
          500: "#6372CE",
          600: "#464EBD",
          700: "#4547B0",
          800: "#3D3D90",
          900: "#353673",
          950: "#252447",
        },
        green: {
          primary: "#72BD4F",
          50: "#F5FBF2",
          100: "#E8F7E1",
          200: "#D2EDC5",
          300: "#AEDD98",
          400: "#72BD4F",
          500: "#60A93E",
          600: "#4C882E",
          700: "#3C6727",
          800: "#345724",
          900: "#2B481F",
          950: "#13270C",
        },
        red: {
          primary: "#D33131",
          50: "#FDF3F3",
          100: "#FDE3E3",
          200: "#FBCDCB",
          300: "#F8A9A9",
          400: "#F17878",
          500: "#E64D4D",
          600: "#D33131",
          700: "#B12424",
          800: "#932121",
          900: "#7A2222",
          950: "#420D0D",
        },
        yellow: {
          primary: "#FFDE21",
          50: "#FFDEB8",
          100: "#FFDDC2",
          200: "#FFF887",
          300: "#FFED43",
          400: "#FFDE21",
          500: "#FEC203",
          600: "#CE9700",
          700: "#A46B04",
          800: "#88540B",
          900: "#734410",
          950: "#432305",
        },
        status: {
          error: "#D33131",
          warning: "#FFDE21",
          success: "#72BD4F",
          info: "#464EBD",
          disable: "#E6E6E7",
        },
        backgroundLight: {
          blue: "#F2F4FC",
          green: "#FFDE21",
          red: "#FDF3F3",
          yellow: "#FFDE8B",
          neutral: "#F7F7F7",
        },

        skeleton: "#40404021",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        slideDown: {
          from: {
            height: "0px",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        slideUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0px",
          },
        },
        slideUpAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(2px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideDownAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(-2px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        infiniteSpin: "spin 600ms linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 3px)",
        xs: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
