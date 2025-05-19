import { Button } from '~/components/ui';
import { useTheme } from '~/hooks/useTheme';
import { Moon, Sun } from '~/lib/icons';

export function ThemeToggle() {
  const { isDark, colors, toggleColorScheme } = useTheme();

  return (
    <Button
      variant='default'
      size='icon'
      onPress={toggleColorScheme}
      className='rounded-full'
    >
      {isDark ? (
        <Sun size={20} color={colors.textPrimary} />
      ) : (
        <Moon size={20} color={colors.textPrimary} />
      )}
    </Button>
  );
}
