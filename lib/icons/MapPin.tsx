import { MapPin as LucideMapPin } from 'lucide-react-native';
import { iconWithClassName } from './iconWithClassName';
import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { useTheme } from '~/hooks/useTheme';

iconWithClassName(LucideMapPin);

export function MapPin({
  className,
  size = 24,
  ...props
}: React.ComponentProps<typeof LucideMapPin>) {
  const { isDark } = useTheme();

  return (
    <View className={cn('flex items-center justify-center', className)}>
      <LucideMapPin
        size={size}
        color={isDark ? '#ffffff' : '#000000'}
        {...props}
      />
    </View>
  );
}
