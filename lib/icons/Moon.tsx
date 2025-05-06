import { Moon as LucideMoon } from 'lucide-react-native';
import { iconWithClassName } from './iconWithClassName';
import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { useTheme } from '~/hooks/useTheme';

iconWithClassName(LucideMoon);

export function Moon({
  className,
  size = 24,
  ...props
}: React.ComponentProps<typeof LucideMoon>) {
  const { isDark } = useTheme();

  return (
    <View className={cn('flex items-center justify-center', className)}>
      <LucideMoon
        size={size}
        color={isDark ? '#ffffff' : '#000000'}
        {...props}
      />
    </View>
  );
}
