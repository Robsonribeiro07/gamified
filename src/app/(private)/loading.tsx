import { colors } from '@/styles/themes'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-backgroundColor">
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  )
}
