import { QueryClientProvider } from '@tanstack/react-query'
import './global.css'
import { Stack } from 'expo-router'
import queryClient from '@/lib/queryclient'
import { StatusBar } from 'expo-status-bar'
import useCustomFonts from '@/hooks/use-custom-fonts'
import { ProtectRouter } from '@/Routes/Protected-route/protected.route'

export default function RootLayout() {
  useCustomFonts()
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar hidden />
      <ProtectRouter>
        <Stack screenOptions={{ headerShown: false }} />
      </ProtectRouter>
    </QueryClientProvider>
  )
}
