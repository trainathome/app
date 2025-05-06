import { Clock as LucideClock } from 'lucide-react-native';
import { iconWithClassName } from './iconWithClassName';
import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { useTheme } from '~/hooks/useTheme';

iconWithClassName(LucideClock);

export function Clock({
  className,
  size = 24,
  ...props
}: React.ComponentProps<typeof LucideClock>) {
  const { isDark } = useTheme();

  return (
    <View className={cn('flex items-center justify-center', className)}>
      <LucideClock
        size={size}
        color={isDark ? '#ffffff' : '#000000'}
        {...props}
      />
    </View>
  );
}
