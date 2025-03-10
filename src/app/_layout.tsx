import { QueryClientProvider } from '@tanstack/react-query'
import './global.css'
import { Stack, useFocusEffect } from 'expo-router'
import queryClient from '@/lib/queryclient'
import { StatusBar } from 'expo-status-bar'
import useCustomFonts from '@/hooks/use-custom-fonts'
import { ProtectRouter } from '@/Routes/protected.route'
import { useLocaleAuthentication } from '@/hooks/segurage/use-locale-authentication'
import { useCallback } from 'react'

export default function RootLayout() {
  const { flowAsyncAuthentication } = useLocaleAuthentication()

  useFocusEffect(
    useCallback(() => {
      flowAsyncAuthentication()
    }, []),
  )
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
