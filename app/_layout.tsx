import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="createAccount" options={{ headerShown: false }} />
        <Stack.Screen name="chooseorenterPassword" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name ="tripDetails"options={{ headerShown: false }} />
        <Stack.Screen name="status" options={{ headerShown: false }} />
        <Stack.Screen name="systemWaits" options={{ headerShown: false }} />
        <Stack.Screen name="emergncyContacts" options={{ headerShown: false }} />
        <Stack.Screen name="locationShared" options={{ headerShown: false }} />
        <Stack.Screen name="alertTriggered" options={{ headerShown: false }} />
        <Stack.Screen name="missedCheckin" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
