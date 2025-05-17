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
