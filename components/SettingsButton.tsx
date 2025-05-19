import { Settings } from 'lucide-react-native';
import React from 'react';
import { useTheme } from '~/hooks/useTheme';
import { Button } from './ui/button';
export function SettingsButton({
  className = '',
  onPress = () => {},
  ...props
}) {
  const { isDark } = useTheme();

  return (
    <Button
      variant='default'
      size='icon'
      className={`rounded-full bg-white/80 dark:bg-black/60 ${className}`}
      onPress={onPress}
      {...props}
    >
      <Settings size={18} color={isDark ? '#ffffff' : '#000000'} />
    </Button>
  );
}
