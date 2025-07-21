import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { useTheme } from '~/hooks/useTheme';
import { Button } from './ui/button';
export function BackButton({ className = '', ...props }) {
  const router = useRouter();
  const { isDark } = useTheme();

  return (
    <Button
      variant='default'
      size='icon'
      className={`rounded-full bg-white/80 dark:bg-black/60 ${className}`}
      onPress={() => router.back()}
      {...props}
    >
      <ArrowLeft size={18} color={isDark ? 'white' : 'black'} />
    </Button>
  );
}
