const sharedColors = {
  accent: '#38BDF8',
  destructive: '#EF4444',
  info: '#0EA5E9',
  tabIconDefault: '#ccc',
};

const lightColors = {
  ...sharedColors,
  background: '#F7F7FA',
  surface: '#FFFFFF',
  textPrimary: '#23272F',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  primary: '#2563EB',
  primaryText: '#FFFFFF',
  secondary: '#F1F5F9',
  secondaryText: '#23272F',
  muted: '#F3F4F6',
  mutedText: '#6B7280',
  accentText: '#23272F',
  destructiveText: '#FFFFFF',
  infoBackground: '#E0F2FE',
  infoText: '#2563EB',
  tint: '#2f95dc',
  tabIconSelected: '#2f95dc',
  separator: '#E5E7EB',
};

const darkColors = {
  ...sharedColors,
  background: '#181A20',
  surface: '#23272F',
  textPrimary: '#F3F4F6',
  textSecondary: '#9CA3AF',
  border: '#F3F4F6',
  primary: '#60A5FA',
  primaryText: '#181A20',
  secondary: '#2D333B',
  secondaryText: '#F3F4F6',
  muted: '#2D333B',
  mutedText: '#9CA3AF',
  accentText: '#181A20',
  destructiveText: '#181A20',
  infoBackground: '#0EA5E9',
  infoText: '#F3F4F6',
  tint: '#FFFFFF',
  tabIconSelected: '#FFFFFF',
  separator: '#FFFFFF',
};

export const Colors = {
  light: lightColors,
  dark: darkColors,
};

export default Colors;
