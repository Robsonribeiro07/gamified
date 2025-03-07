import { Header } from '@/components/profile/header'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { colors } from '@/styles/themes'

export default function LayoutApp() {
  return (
    <View className="flex-1 bg-backgroundColor">
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.backgroundColor,
            flex: 1,
            width: '80%',
            marginHorizontal: 'auto',
            paddingTop: 20,
          },
        }}
      />
    </View>
  )
}
