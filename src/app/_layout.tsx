import { QueryClientProvider } from '@tanstack/react-query'
import './global.css'
import { Stack } from 'expo-router'
import queryClient from '@/lib/queryclient'
import useCustomFonts from '@/hooks/use-custom-fonts'
import { StatusBar } from 'react-native'

export default function RootLayout() {
  useCustomFonts()
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  )
}
