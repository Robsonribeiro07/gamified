import defaultTheme from '@/styles/themes/default-theme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { View } from 'react-native'

import { colors } from '@/styles/themes'
import { Header } from '../profile/header'
interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={{ backgroundColor: colors.backgroundColor, flex: 1 }}>
        <Header />
        {children}
      </View>
    </ThemeProvider>
  )
}
