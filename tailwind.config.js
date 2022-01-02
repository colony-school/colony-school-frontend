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
        primary: {
          primary100: "#ffffff",
          primary99: "#fdfcff",
          primary95: "#e9f1ff",
          primary90: "#d1e4ff",
          primary80: "#9fc9ff",
          primary70: "#65afff",
          primary60: "#4094e9",
          primary50: "#157acd",
          primary40: "#0060a9",
          primary30: "#004881",
          primary20: "#00315b",
          primary10: "#001c38",
          primary0: "#000000",
          "opacity-0.08": "#9fc9ff",
          "opacity-0.12": "#9fc9ff",
          "opacity-0.16": "#9fc9ff"
        },
        secondary: {
          secondary100: "#ffffff",
          secondary99: "#fffbf7",
          secondary95: "#fff0bb",
          secondary90: "#ffe167",
          secondary80: "#e8c429",
          secondary70: "#caa800",
          secondary60: "#ac8e00",
          secondary50: "#8f7500",
          secondary40: "#715c00",
          secondary30: "#554500",
          secondary20: "#3b2f00",
          secondary10: "#231b00",
          secondary0: "#000000",
          "opacity-0.08": "#e8c429",
          "opacity-0.12": "#e8c429",
          "opacity-0.16": "#e8c429"
        },
        tertiary: {
          tertiary100: "#ffffff",
          tertiary99: "#fcfcfc",
          tertiary95: "#ffede5",
          tertiary90: "#ffdbca",
          tertiary80: "#ffb591",
          tertiary70: "#fa8f59",
          tertiary60: "#da7642",
          tertiary50: "#ba5d2b",
          tertiary40: "#9a4514",
          tertiary30: "#7b2f00",
          tertiary20: "#571f00",
          tertiary10: "#351000",
          tertiary0: "#000000",
          "opacity-0.08": "#ffb591",
          "opacity-0.12": "#ffb591",
          "opacity-0.16": "#ffb591"
        },
        neutral: {
          neutral100: "#ffffff",
          neutral99: "#fdfcff",
          neutral95: "#f1f0f4",
          neutral90: "#e2e2e6",
          neutral80: "#c6c6ca",
          neutral70: "#ababaf",
          neutral60: "#909094",
          neutral50: "#76777a",
          neutral40: "#5d5e62",
          neutral30: "#46474a",
          neutral20: "#2f3033",
          neutral10: "#1b1b1b",
          neutral0: "#000000"
        },
        "neutral-variant": {
          "neutral-variant100": "#ffffff",
          "neutral-variant99": "#fdfcff",
          "neutral-variant95": "#eef1fa",
          "neutral-variant90": "#dfe2eb",
          "neutral-variant80": "#c3c6cf",
          "neutral-variant70": "#a7abb3",
          "neutral-variant60": "#8d9199",
          "neutral-variant50": "#73777f",
          "neutral-variant40": "#5a5e66",
          "neutral-variant30": "#43474e",
          "neutral-variant20": "#2d3137",
          "neutral-variant10": "#181c22",
          "neutral-variant0": "#000000"
        },
        error: {
          error100: "#ffffff",
          error99: "#fcfcfc",
          error95: "#ffede9",
          error90: "#ffdad4",
          error80: "#ffb4a9",
          error70: "#ff897a",
          error60: "#ff5449",
          error50: "#dd3730",
          error40: "#ba1b1b",
          error30: "#930006",
          error20: "#680003",
          error10: "#410001",
          error0: "#000000",
          "opacity-0.08": "#ffb4a9",
          "opacity-0.12": "#ffb4a9",
          "opacity-0.16": "#ffb4a9"
        },
        "on-primary": {
          "opacity-0.08": "#00315b",
          "opacity-0.12": "#00315b",
          "opacity-0.16": "#00315b"
        },
        "primary-container": {
          "opacity-0.08": "#004881",
          "opacity-0.12": "#004881",
          "opacity-0.16": "#004881"
        },
        "on-primary-container": {
          "opacity-0.08": "#d1e4ff",
          "opacity-0.12": "#d1e4ff",
          "opacity-0.16": "#d1e4ff"
        },
        "on-secondary": {
          "opacity-0.08": "#3b2f00",
          "opacity-0.12": "#3b2f00",
          "opacity-0.16": "#3b2f00"
        },
        "secondary-container": {
          "opacity-0.08": "#554500",
          "opacity-0.12": "#554500",
          "opacity-0.16": "#554500"
        },
        "on-secondary-container": {
          "opacity-0.08": "#ffe167",
          "opacity-0.12": "#ffe167",
          "opacity-0.16": "#ffe167"
        },
        "on-tertiary": {
          "opacity-0.08": "#571f00",
          "opacity-0.12": "#571f00",
          "opacity-0.16": "#571f00"
        },
        "tertiary-container": {
          "opacity-0.08": "#7b2f00",
          "opacity-0.12": "#7b2f00",
          "opacity-0.16": "#7b2f00"
        },
        "on-tertiary-container": {
          "opacity-0.08": "#ffdbca",
          "opacity-0.12": "#ffdbca",
          "opacity-0.16": "#ffdbca"
        },
        "error-container": {
          "opacity-0.08": "#930006",
          "opacity-0.12": "#930006",
          "opacity-0.16": "#930006"
        },
        "on-error": {
          "opacity-0.08": "#680003",
          "opacity-0.12": "#680003",
          "opacity-0.16": "#680003"
        },
        "on-error-container": {
          "opacity-0.08": "#ffdad4",
          "opacity-0.12": "#ffdad4",
          "opacity-0.16": "#ffdad4"
        },
        background: {
          "opacity-0.08": "#1b1b1b",
          "opacity-0.12": "#1b1b1b",
          "opacity-0.16": "#1b1b1b"
        },
        "on-background": {
          "opacity-0.08": "#e2e2e6",
          "opacity-0.12": "#e2e2e6",
          "opacity-0.16": "#e2e2e6"
        },
        surface: {
          "opacity-0.08": "#1b1b1b",
          "opacity-0.12": "#1b1b1b",
          "opacity-0.16": "#1b1b1b"
        },
        "on-surface": {
          "opacity-0.08": "#e2e2e6",
          "opacity-0.12": "#e2e2e6",
          "opacity-0.16": "#e2e2e6"
        },
        "surface-variant": {
          "opacity-0.08": "#43474e",
          "opacity-0.12": "#43474e",
          "opacity-0.16": "#43474e"
        },
        "on-surface-variant": {
          "opacity-0.08": "#c3c6cf",
          "opacity-0.12": "#c3c6cf",
          "opacity-0.16": "#c3c6cf"
        },
        outline: {
          "opacity-0.08": "#8d9199",
          "opacity-0.12": "#8d9199",
          "opacity-0.16": "#8d9199"
        },
        "inverse-on-surface": {
          "opacity-0.08": "#1b1b1b",
          "opacity-0.12": "#1b1b1b",
          "opacity-0.16": "#1b1b1b"
        },
        "inverse-surface": {
          "opacity-0.08": "#e2e2e6",
          "opacity-0.12": "#e2e2e6",
          "opacity-0.16": "#e2e2e6"
        },
        "inverse-primary": {
          "opacity-0.08": "#0060a9",
          "opacity-0.12": "#0060a9",
          "opacity-0.16": "#0060a9"
        },
        shadow: {
          "opacity-0.08": "#000000",
          "opacity-0.12": "#000000",
          "opacity-0.16": "#000000"
        }
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
      }
    },
  },
  plugins: [],
}