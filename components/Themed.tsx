import { Text as DefaultText, View as DefaultView } from 'react-native';
import { useTheme } from '~/hooks/useTheme';
import { ThemedTextProps, ThemedViewProps } from '~/interfaces';

export function Text(props: ThemedTextProps) {
  const { style, color, ...otherProps } = props;
  const { colors } = useTheme();
  const textColor = color ?? colors.textPrimary;

  return <DefaultText style={[{ color: textColor }, style]} {...otherProps} />;
}

export function View(props: ThemedViewProps) {
  const { style, color, ...otherProps } = props;
  const { colors } = useTheme();
  const backgroundColor = color ?? colors.surface;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
