import { NavigationHome } from '@/components/home/nav/navigation-home'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="bg-backgroundColor  min-w-fit flex-1 h-screen items-center justify-center">
      <NavigationHome />
    </View>
  )
}
