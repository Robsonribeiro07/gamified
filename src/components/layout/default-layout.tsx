import defaultTheme from '@/styles/themes/default-theme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { View, Text, StatusBar } from 'react-native'
import useCustomFonts from '@/hooks/use-custom-fonts'
import { colors } from '@/styles/themes'
import { Header } from '../profile/header'
interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const fontsLoaded = useCustomFonts()

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando fontes...</Text>
      </View>
    )
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={{ backgroundColor: colors.backgroundColor, flex: 1 }}>
        <Header />
        <StatusBar />
        {children}
      </View>
    </ThemeProvider>
  )
}
