import { useLocaleAuthentication } from '@/hooks/segurage/use-locale-authentication'
import { Redirect, useFocusEffect } from 'expo-router'
import { useCallback } from 'react'

export default function Authentication() {
  const isAuthenticaded = false
  const { flowAsyncAuthentication } = useLocaleAuthentication()

  if (isAuthenticaded) {
    return <Redirect href="/Auth" />
  }

  useFocusEffect(
    useCallback(() => {
      flowAsyncAuthentication()
    }, []),
  )
}
