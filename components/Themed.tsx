import { Text as DefaultText, View as DefaultView } from 'react-native';
import { useTheme } from '~/hooks/useTheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ThemedTextProps = ThemeProps & DefaultText['props'];
type ThemedViewProps = ThemeProps & DefaultView['props'];

export function Text(props: ThemedTextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { colors } = useTheme();
  const color = lightColor ?? darkColor ?? colors.textPrimary;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ThemedViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const { colors } = useTheme();
  const backgroundColor = lightColor ?? darkColor ?? colors.background;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
