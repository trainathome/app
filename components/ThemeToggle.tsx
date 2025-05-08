import { Moon, Sun } from '~/lib/icons';
import { useTheme } from '~/hooks/useTheme';
import { Button } from '~/components/ui';

export function ThemeToggle() {
  const { isDark, colors, toggleColorScheme } = useTheme();

  return (
    <Button
      variant='ghost'
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
