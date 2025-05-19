import Colors from '../constants/Colors';

const generateThemeColors = () => {
  const sharedColors = {
    accent: Colors.light.accent,
    destructive: Colors.light.destructive,
    info: Colors.light.info,
    tabIconDefault: Colors.light.tabIconDefault,
  };

  const themeColors = {
    background: {
      light: Colors.light.background,
      dark: Colors.dark.background,
    },
    surface: {
      light: Colors.light.surface,
      dark: Colors.dark.surface,
    },
    textPrimary: {
      light: Colors.light.textPrimary,
      dark: Colors.dark.textPrimary,
    },
    textSecondary: {
      light: Colors.light.textSecondary,
      dark: Colors.dark.textSecondary,
    },
    border: {
      light: Colors.light.border,
      dark: Colors.dark.border,
    },
    primary: {
      light: Colors.light.primary,
      dark: Colors.dark.primary,
    },
    primaryText: {
      light: Colors.light.primaryText,
      dark: Colors.dark.primaryText,
    },
    secondary: {
      light: Colors.light.secondary,
      dark: Colors.dark.secondary,
    },
    secondaryText: {
      light: Colors.light.secondaryText,
      dark: Colors.dark.secondaryText,
    },
    muted: {
      light: Colors.light.muted,
      dark: Colors.dark.muted,
    },
    mutedText: {
      light: Colors.light.mutedText,
      dark: Colors.dark.mutedText,
    },
    accentText: {
      light: Colors.light.accentText,
      dark: Colors.dark.accentText,
    },
    destructiveText: {
      light: Colors.light.destructiveText,
      dark: Colors.dark.destructiveText,
    },
    infoBackground: {
      light: Colors.light.infoBackground,
      dark: Colors.dark.infoBackground,
    },
    infoText: {
      light: Colors.light.infoText,
      dark: Colors.dark.infoText,
    },
    tint: {
      light: Colors.light.tint,
      dark: Colors.dark.tint,
    },
    tabIconSelected: {
      light: Colors.light.tabIconSelected,
      dark: Colors.dark.tabIconSelected,
    },
    separator: {
      light: Colors.light.separator,
      dark: Colors.dark.separator,
    },
  };

  return {
    ...sharedColors,
    ...themeColors,
  };
};

export const themeColors = generateThemeColors();
