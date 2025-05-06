import { Sun as LucideSun } from 'lucide-react-native';
import { iconWithClassName } from './iconWithClassName';
import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { useTheme } from '~/hooks/useTheme';

iconWithClassName(LucideSun);

export function Sun({
  className,
  size = 24,
  ...props
}: React.ComponentProps<typeof LucideSun>) {
  const { isDark } = useTheme();

  return (
    <View className={cn('flex items-center justify-center', className)}>
      <LucideSun
        size={size}
        color={isDark ? '#ffffff' : '#000000'}
        {...props}
      />
    </View>
  );
}
