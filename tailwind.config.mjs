/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "on-tertiary": "#ffffff",
        "on-secondary-container": "#576846",
        "on-tertiary-fixed-variant": "#584324",
        "on-secondary-fixed-variant": "#3b4c2c",
        "inverse-on-surface": "#f3f0f0",
        "on-primary": "#ffffff",
        "background": "#fbf9f8",
        "error-container": "#ffdad6",
        "primary": "#172a1e",
        "surface-container": "#f0eded",
        "on-tertiary-container": "#bea17b",
        "tertiary-fixed": "#feddb3",
        "on-surface": "#1b1c1c",
        "secondary": "#526442",
        "on-secondary-fixed": "#111f05",
        "on-secondary": "#ffffff",
        "outline": "#737873",
        "on-error-container": "#93000a",
        "surface-dim": "#dcd9d9",
        "tertiary-container": "#4c381a",
        "on-primary-fixed-variant": "#384b3e",
        "inverse-surface": "#303030",
        "outline-variant": "#c3c8c1",
        "inverse-primary": "#b6ccba",
        "surface": "#fbf9f8",
        "on-tertiary-fixed": "#281801",
        "on-primary-container": "#96ab9b",
        "error": "#ba1a1a",
        "on-background": "#1b1c1c",
        "tertiary": "#342306",
        "primary-fixed": "#d2e8d6",
        "secondary-fixed-dim": "#b9cda4",
        "secondary-fixed": "#d5e9bf",
        "secondary-container": "#d2e6bc",
        "tertiary-fixed-dim": "#e1c299",
        "surface-tint": "#4f6355",
        "surface-bright": "#fbf9f8",
        "on-error": "#ffffff",
        "surface-variant": "#e4e2e1",
        "surface-container-highest": "#e4e2e1",
        "primary-fixed-dim": "#b6ccba",
        "primary-container": "#2d4033",
        "on-surface-variant": "#434843",
        "surface-container-high": "#eae8e7",
        "surface-container-low": "#f6f3f2",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#0d1f14"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "128px",
        "unit": "8px",
        "margin-mobile": "20px",
        "container-max": "1200px",
        "margin-desktop": "64px",
        "gutter": "24px"
      },
      fontFamily: {
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "display-lg": ["Playfair Display", "serif"]
      },
      fontSize: {
        "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "display-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "500" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
        "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }]
      }
    }
  },
  plugins: []
}
