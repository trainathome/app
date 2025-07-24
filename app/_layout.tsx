import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { memo, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import 'react-native-reanimated';

import { CustomDarkTheme, CustomLightTheme } from '@/constants/NavigationTheme';
import { useTheme } from '@/hooks';

import '../global.css';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayoutNav = memo(function RootLayoutNav({
  isDark,
}: {
  readonly isDark: boolean;
}) {
  return (
    <ThemeProvider value={isDark ? CustomDarkTheme : CustomLightTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='activity-detail/[activityId]'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='profile-settings'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='auth'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
});

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const { isDark } = useTheme();

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setIsReady(true);
    }
  }, [loaded]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add('bg-background');
    }
  }, []);

  if (!isReady) {
    return null;
  }

  return <RootLayoutNav isDark={isDark} />;
}
