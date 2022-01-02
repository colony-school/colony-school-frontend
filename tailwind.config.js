module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#0060a9",
          "on-primary": "#ffffff",
          "primary-container": "#d1e4ff",
          "on-primary-container": "#001c38",
          "primary-0.08": "#146db0",
          "primary-0.12": "#7965af",
          "primary-0.08-tlc": "#6750a408",
          "primary-0.12-tlc": "#6750a40c",
          secondary: "#715c00",
          "on-secondary": "#ffffff",
          "secondary-container": "#ffe167",
          "on-secondary-container": "#231b00",
          tertiary: "#9a4514",
          "on-tertiary": "#ffffff",
          "tertiary-container": "#ffdbca",
          "on-tertiary-container": "#351000",
          error: "#ba1b1b",
          "error-container": "#ffdad4",
          "on-error": "#ffffff",
          "on-error-container": "#410001",
          background: "#fdfcff",
          "on-background": "#1b1b1b",
          surface: "#fdfcff",
          "on-surface": "#1b1b1b",
          "surface-variant": "#dfe2eb",
          "on-surface-variant": "#43474e",
          outline: "#73777f",
          "inverse-on-surface": "#f1f0f4",
          "inverse-surface": "#2f3033",
          "inverse-primary": "#9fc9ff",
          shadow: "#000000",
          surface1: "#f0f4fb",
          surface2: "#e9f0f8",
          surface3: "#e1ebf6",
          surface4: "#dfe9f5",
          surface5: "#dae6f3",
          black: "#000000",
          white: "#ffffff"
        },
        dark: {
          primary: "#9fc9ff",
          "on-primary": "#00315b",
          "primary-container": "#004881",
          "on-primary-container": "#d1e4ff",
          "primary-0.08": "#d0bcff", // temp
          "primary-0.12": "#d0bcff", // temp
          "primary-0.08-tlc": "#9fc9ff08",
          "primary-0.12-tlc": "#9fc9ff0c",
          secondary: "#e8c429",
          "on-secondary": "#3b2f00",
          "secondary-container": "#554500",
          "on-secondary-container": "#ffe167",
          tertiary: "#ffb591",
          "on-tertiary": "#571f00",
          "tertiary-container": "#7b2f00",
          "on-tertiary-container": "#ffdbca",
          error: "#ffb4a9",
          "error-container": "#930006",
          "on-error": "#680003",
          "on-error-container": "#ffdad4",
          background: "#1b1b1b",
          "on-background": "#e2e2e6",
          surface: "#1b1b1b",
          "on-surface": "#e2e2e6",
          "surface-variant": "#43474e",
          "on-surface-variant": "#c3c6cf",
          outline: "#8d9199",
          "inverse-on-surface": "#1b1b1b",
          "inverse-surface": "#e2e2e6",
          "inverse-primary": "#0060a9",
          shadow: "#000000",
          surface1: "#222426",
          surface2: "#26292d",
          surface3: "#2a2e34",
          surface4: "#2b3036",
          surface5: "#2d333b",
          white: "#ffffff",
          black: "#000000"
        },
      },
      fontSize: {
        xs: "0.6875rem",
        sm: "0.75rem",
        base: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.75rem",
        "5xl": "2rem",
        "6xl": "2.25rem",
        "7xl": "2.8125rem",
        "8xl": "3.5625rem",
        "9xl": "4rem"
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans Thai", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        none: "0",
        xs: "0.03125rem",
        sm: "0.25rem",
        default: "0.5rem",
        lg: "0.75rem",
        xl: "0.9375rem",
        "2xl": "1.75rem",
        "3xl": "2.90625rem",
        full: "9999px"
      },
      boxShadow: {
        DEFAULT: "0px 1px 2px rgba(0, 0, 0, 0.6), 0px 2px 6px 2px rgba(0, 0, 0, 0.3)"
      },
    },
  },
  plugins: [],
}