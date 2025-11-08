import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const baseConfig = {
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        // // Use Poppins everywhere by default (sans)
        // sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        // // Use Playfair Display for serif contexts
        // serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        // Handy explicit aliases
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },

      fontSize: {
        // Headings
        "h1": ["56px", { lineHeight: "64px", letterSpacing: "0", fontWeight: "700"}],
        "h2": ["48px", { lineHeight: "56px", letterSpacing: "0", fontWeight: "700"}],
        "h3": ["40px", { lineHeight: "48px", letterSpacing: "0", fontWeight: "700"}],
        "h4": ["32px", { lineHeight: "40px", letterSpacing: "0", fontWeight: "700"}],
        "h5": ["24px", { lineHeight: "32px", letterSpacing: "0", fontWeight: "700"}],
        "h6": ["20px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "700"}],
        // Labels
        "label-xl": ["24px", { lineHeight: "32px", letterSpacing: "0", fontWeight: "500" }],
        "label-lg": ["18px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "500" }],
        "label-md": ["16px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "500" }],
        "label-sm": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "500" }],
        "label-xs": ["12px", { lineHeight: "16px", letterSpacing: "0", fontWeight: "500" }],
        // Paragraphs
        "paragraph-xl": ["24px", { lineHeight: "32px", letterSpacing: "0", fontWeight: "400" }],
        "paragraph-lg": ["18px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "400" }],
        "paragraph-md": ["16px", { lineHeight: "24px", letterSpacing: "-1.1%", fontWeight: "400" }],
        "paragraph-sm": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "400" }],
        "paragraph-xs": ["12px", { lineHeight: "16px", letterSpacing: "0", fontWeight: "400" }],
        // Subheadings
        "subheading-md": ["16px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "700" }],
        "subheading-sm": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "700" }],
        "subheading-xs": ["12px", { lineHeight: "16px", letterSpacing: "0", fontWeight: "700" }],
        "subheading-2xs": ["11px", { lineHeight: "12px", letterSpacing: "0", fontWeight: "700" }],
      },
      colors: {
        // Vintage Acquisition Color Palette
        grey: {
          0: "#FFFFFF",
          50: "#F1F1F1",
          100: "#E5E5E5",
          200: "#C5C5C4",
          300: "#939695",
          400: "#636868",
          500: "#505553",
          600: "#333336",
          700: "#2C322F",
          800: "#222926",
          900: "#0F1613",
        },
        vintage: {
          50: "#F3EEDD",
          100: "#ECE4C9",
          200: "#E5DAB5",
          300: "#DCCFA0",
          400: "#D0C893",
          500: "#CFB878",
          600: "#B09F66",
          700: "#918354",
          800: "#726742",
          900: "#3F2F1E",
        },
        teal: {
          50: "#C7EDE2",
          100: "#A5CAD1",
          200: "#84B6C0",
          300: "#6A9EAE",
          400: "#408E9D",
          500: "#1F7A8C",
          600: "#1A6877",
          700: "#165662",
          800: "#11434D",
          900: "#0C3138",
        },
        green: {
          50: "#E9F8F0",
          100: "#C8EBD1",
          200: "#9BE1BB",
          300: "#6ED39D",
          400: "#51CA59",
          500: "#28B96C",
          600: "#23AC62",
          700: "#1B8B4D",
          800: "#156838",
          900: "#104F2D",
        },
        red: {
          50: "#FEE6EB",
          100: "#FCC2CF",
          200: "#FA92AA",
          300: "#F68F82",
          400: "#F62F5D",
          500: "#FA0139",
          600: "#CF0130",
          700: "#AD0128",
          800: "#8B0120",
          900: "#6E001A",
        },
        neutral: {
          900: "#2F3639",
        },
        // Existing shadcn/ui colors (keeping for compatibility)
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
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
      },
    },
  },
  plugins: [],
};

export default baseConfig;

