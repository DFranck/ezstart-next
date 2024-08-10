// src\types\style.d.ts

// Typical types defined here:
// - Extensions of CSS properties to add custom CSS variables (e.g., --quantity, --position)
// - Specific properties used for styling components (e.g., fieldSizing)

import 'react';

declare module 'react' {
  interface CSSProperties {
    '--quantity'?: string;
    '--position'?: string;
    fieldSizing?: string;
  }
}
