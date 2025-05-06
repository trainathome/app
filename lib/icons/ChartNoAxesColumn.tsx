import { ChartNoAxesColumn as LucideChartNoAxesColumn } from 'lucide-react-native';
import { iconWithClassName } from './iconWithClassName';
import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { useTheme } from '~/hooks/useTheme';

iconWithClassName(LucideChartNoAxesColumn);

export function ChartNoAxesColumn({
  className,
  size = 24,
  ...props
}: React.ComponentProps<typeof LucideChartNoAxesColumn>) {
  const { isDark } = useTheme();

  return (
    <View className={cn('flex items-center justify-center', className)}>
      <LucideChartNoAxesColumn
        size={size}
        color={isDark ? '#ffffff' : '#000000'}
        {...props}
      />
    </View>
  );
}
