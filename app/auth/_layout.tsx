import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='sign-in' />
      <Stack.Screen name='verify-email' />
      <Stack.Screen name='register' />
    </Stack>
  );
}
