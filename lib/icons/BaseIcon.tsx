import { View } from 'react-native';
import { useTheme } from '~/hooks/useTheme';
import { BaseIconProps } from '~/interfaces';
import { cn } from '~/lib/utils';
import { iconWithClassName } from './iconWithClassName';

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
        color={color ?? (isDark ? 'white' : 'black')}
        {...props}
      />
    </View>
  );
}
