import { colors } from '@/styles/themes'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native'

export default function Loading() {
  return (
    <View
      className="flex-1 items-center justify-center bg-backgroundColor"
      testID="loading"
    >
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  )
}
