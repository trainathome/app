import { useColorScheme as useColorSchemeNativewind } from 'nativewind';
import { Colors } from '../constants/Colors';

export function useTheme() {
  const { setColorScheme, colorScheme } = useColorSchemeNativewind();
  const isDark = colorScheme === 'dark';
  const isLight = colorScheme === 'light';
  const colors = isDark ? Colors.dark : Colors.light;

  const toggleColorScheme = () => {
    if (isDark) {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };

  return { isDark, isLight, colors, toggleColorScheme };
}
