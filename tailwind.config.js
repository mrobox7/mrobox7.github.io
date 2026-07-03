/**
 * Tailwind config generated from Claude-design-analysis (warm-canvas editorial system).
 * Every value here is a direct token from the design analysis — do not hand-edit
 * hex values elsewhere in the codebase; reference these theme keys instead.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand & accent
        primary: {
          DEFAULT: "#cc785c",
          active: "#a9583e",
          disabled: "#e6dfd8",
        },
        "accent-teal": "#5db8a6",
        "accent-amber": "#e8a55a",

        // Text
        ink: "#141413",
        body: {
          DEFAULT: "#3d3d3a",
          strong: "#252523",
        },
        muted: {
          DEFAULT: "#6c6a64",
          soft: "#8e8b82",
        },

        // Surfaces
        canvas: "#faf9f5",
        "surface-soft": "#f5f0e8",
        "surface-card": "#efe9de",
        "surface-cream-strong": "#e8e0d2",
        "surface-dark": "#181715",
        "surface-dark-elevated": "#252320",
        "surface-dark-soft": "#1f1e1b",

        // Borders
        hairline: "#e6dfd8",
        "hairline-soft": "#ebe6df",

        // On-color text
        "on-primary": "#ffffff",
        "on-dark": "#faf9f5",
        "on-dark-soft": "#a09d96",

        // Semantic
        success: "#5db872",
        warning: "#d4a017",
        error: "#c64545",
      },

      fontFamily: {
        // Display: Copernicus is a licensed Anthropic typeface — Tiempos Headline /
        // Cormorant Garamond are the open substitutes used here as fallbacks.
        display: [
          "Tiempos Headline",
          "Cormorant Garamond",
          "EB Garamond",
          "Garamond",
          "Times New Roman",
          "serif",
        ],
        // Body: StyreneB is licensed — Inter is the documented open substitute.
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      fontSize: {
        // [fontSize, { lineHeight, letterSpacing, fontWeight }]
        "display-xl": ["64px", { lineHeight: "1.05", letterSpacing: "-1.5px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-1px", fontWeight: "400" }],
        "display-md": ["36px", { lineHeight: "1.15", letterSpacing: "-0.5px", fontWeight: "400" }],
        "display-sm": ["28px", { lineHeight: "1.2", letterSpacing: "-0.3px", fontWeight: "400" }],
        "title-lg": ["22px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "500" }],
        "title-md": ["18px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "title-sm": ["16px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        caption: ["13px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "caption-uppercase": ["12px", { lineHeight: "1.4", letterSpacing: "1.5px", fontWeight: "500" }],
        code: ["14px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        button: ["14px", { lineHeight: "1", letterSpacing: "0", fontWeight: "500" }],
        "nav-link": ["14px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
      },

      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "9999px",
      },

      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "96px",
      },

      maxWidth: {
        content: "1200px",
      },

      boxShadow: {
        // The system is color-block first, shadow rare. Only one shadow token exists.
        hover: "0 1px 3px rgba(20,20,19,0.08)",
      },

      screens: {
        // mobile: default (<768px, no prefix needed)
        tablet: "768px",
        desktop: "1024px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
