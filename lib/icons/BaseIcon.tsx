import { LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';
import { useTheme } from '~/hooks/useTheme';
import { cn } from '~/lib/utils';
import { iconWithClassName } from './iconWithClassName';

export interface IconComponentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  [key: string]: any;
}

export interface BaseIconProps {
  icon: LucideIcon | React.FC<IconComponentProps>;
  className?: string;
  size?: number;
  color?: string;
  iconProps?: Omit<IconComponentProps, 'size' | 'color'>;
}

export function BaseIcon({
  icon: Icon,
  className,
  size = 24,
  color,
  iconProps,
  ...props
}: Readonly<BaseIconProps>) {
  const { isDark } = useTheme();

  if (
    typeof Icon === 'function' &&
    (Icon as any).$$typeof === Symbol.for('react.memo')
  ) {
    iconWithClassName(Icon as LucideIcon);
  }

  return (
    <View
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <Icon
        size={size}
        color={color ?? (isDark ? '#ffffff' : '#000000')}
        {...iconProps}
      />
    </View>
  );
}
