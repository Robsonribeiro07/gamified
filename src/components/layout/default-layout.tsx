import defaultTheme from '@/styles/themes/default-theme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { View, Text } from 'react-native'

import { colors } from '@/styles/themes'
import { Header } from '../profile/header'
import { StatusBar } from 'expo-status-bar'
interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={{ backgroundColor: colors.backgroundColor, flex: 1 }}>
        <Header />
        <StatusBar style="light" />
        {children}
      </View>
    </ThemeProvider>
  )
}
