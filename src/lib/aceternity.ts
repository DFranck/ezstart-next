import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/**
 * Adds CSS variables for Tailwind color palette to the :root element.
 *
 * @param addBase - Function to add base styles
 * @param theme - Function to retrieve theme values
 */
export function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: (styles: Record<string, unknown>) => void;
  theme: (path: string) => Record<string, string>;
}) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
