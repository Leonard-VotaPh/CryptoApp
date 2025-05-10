export const colors = {
  // Colores principales
  primary: "#0C1421",
  secondary: "#1E293B",

  // Colores de acento
  accent: "#3B82F6",
  accentLight: "#60A5FA",

  // Colores de fondo
  background: "#0C1421",
  backgroundAlt: "#0F172A",

  // Colores de texto
  textPrimary: "#FFFFFF",
  textSecondary: "#94A3B8",
  textOnDark: "#94A3B8",

  // Colores de estado
  success: "#22C55E",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",
  border: "#1E293B",
} as const;

// Tipo para TypeScript
export type ColorKeys = keyof typeof colors;
