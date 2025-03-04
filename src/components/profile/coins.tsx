import { View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'

export function Coins() {
  return (
    <View className="flex-col mr-5">
      <TextWithFont className="text-xl text-white/70 ">Coins:</TextWithFont>
      <TextWithFont className="text-xl text-yellowColor">1200</TextWithFont>
    </View>
  )
}
