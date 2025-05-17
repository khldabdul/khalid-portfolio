/**
 * Theme management utilities
 */

import { browser } from "$app/environment";

export type Theme = "light" | "dark";

/**
 * Initialize theme based on user preference or saved theme
 * @returns Current theme
 */
export function initTheme(): Theme {
  if (!browser) return "light";

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme") as Theme | null;

  if (savedTheme) {
    setTheme(savedTheme);
    return savedTheme;
  }

  // Check for system preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setTheme("dark");
    return "dark";
  }

  // Default to light theme
  setTheme("light");
  return "light";
}

/**
 * Set theme and save preference
 * @param theme - Theme to set
 */
export function setTheme(theme: Theme): void {
  if (!browser) return;

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/**
 * Toggle between light and dark themes
 * @param currentTheme - Current theme
 * @returns New theme
 */
export function toggleTheme(currentTheme: Theme): Theme {
  const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
  return newTheme;
}

/**
 * Get the current theme from document
 * @returns Current theme
 */
export function getCurrentTheme(): Theme {
  if (!browser) return "light";
  
  const dataTheme = document.documentElement.getAttribute("data-theme") as Theme;
  return dataTheme === "dark" ? "dark" : "light";
}

/**
 * Debug theme state - log to console for development
 */
export function debugTheme(): void {
  if (!browser || !window.localStorage) return;
  
  console.group('Theme Debug');
  console.log('HTML data-theme:', document.documentElement.getAttribute('data-theme'));
  console.log('localStorage theme:', localStorage.getItem('theme'));
  console.log('System preference:', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  console.groupEnd();
}
