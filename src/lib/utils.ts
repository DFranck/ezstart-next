// src/lib/utils.ts

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names using clsx and tailwind-merge.
 *
 * @param inputs - An array of class values to be merged
 * @returns A single string of merged class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
