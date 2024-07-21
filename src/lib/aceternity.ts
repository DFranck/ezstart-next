// src/lib/aceternity.ts

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/**
 * Adds CSS variables for Tailwind color palette to the :root element.
 *
 * @param addBase - Function to add base styles
 * @param theme - Function to retrieve theme values
 */
export function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
