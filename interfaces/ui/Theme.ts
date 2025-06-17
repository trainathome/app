import { Text as DefaultText, View as DefaultView } from 'react-native';

export type ThemeProps = {
  color?: string;
};

export type ThemedTextProps = ThemeProps & DefaultText['props'];
export type ThemedViewProps = ThemeProps & DefaultView['props'];
