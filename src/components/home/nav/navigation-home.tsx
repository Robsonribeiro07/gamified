import { View } from 'react-native'
import { NavItems } from './nav-button'

export function NavigationHome() {
  return (
    <View className="flex-col flex-1 w-full items-center justify-center gap-[50]">
      <NavItems Type="Historico" route="Home" />
      <NavItems Type="Shop" route="Shop" />
      <NavItems Type="Ranking" route="Ranking" />
    </View>
  )
}
