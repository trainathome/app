import { Share } from 'lucide-react-native';
import React from 'react';
import { Share as ExpoShare } from 'react-native';
import { useTheme } from '~/hooks/useTheme';
import { Button } from './ui/button';
export function ShareButton({
  className = '',
  shareContent = { message: '¡Únete a esta actividad!' },
  ...props
}) {
  const { isDark } = useTheme();

  const onShare = async () => {
    try {
      await ExpoShare.share(shareContent);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button
      variant='default'
      size='icon'
      className={`rounded-full bg-white/80 dark:bg-black/60 ${className}`}
      onPress={onShare}
      {...props}
    >
      <Share size={18} color={isDark ? '#ffffff' : '#000000'} />
    </Button>
  );
}
