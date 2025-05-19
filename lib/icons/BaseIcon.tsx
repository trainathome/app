import { LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';
import { useTheme } from '~/hooks/useTheme';
import { cn } from '~/lib/utils';
import { iconWithClassName } from './iconWithClassName';

export interface BaseIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  color?: string;
  [key: string]: any;
}

export function BaseIcon({
  icon: Icon,
  className,
  size = 24,
  color,
  ...props
}: Readonly<BaseIconProps>) {
  const { isDark } = useTheme();

  iconWithClassName(Icon);

  return (
    <View className={cn('flex items-center justify-center', className)}>
      <Icon
        size={size}
        color={color ?? (isDark ? '#ffffff' : '#000000')}
        {...props}
      />
    </View>
  );
}
