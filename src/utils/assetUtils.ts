/**
 * Utility functions for handling asset paths in the application
 */

/**
 * Creates a proper asset path taking into account the basename
 * This is important for GitHub Pages deployment where the app is served from a subdirectory
 */
export const getAssetPath = (path: string): string => {
  // In development and production builds, Vite automatically handles the base path
  // The leading slash ensures the path is relative to the domain root
  // GitHub Pages with basename requires the asset URL to include the base path
  if (path.startsWith('/')) {
    // Ensure the path starts with the base URL
    return path;
  }
  return `/${path}`;
};

export default getAssetPath;