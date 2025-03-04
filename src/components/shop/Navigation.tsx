import { View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'

import { TextWithTouchOpactiy } from '../default-components/Text-with-opacity-enabled'
import { IconsWithTouchOpacity } from '../default-components/Icons-with-opacity'
export function Navigation() {
  return (
    <View className="bg-headerColor w-[60%] h-12 rounded-md mx-auto  flex-row items-center justify-around">
      <TextWithFont className="text-white/70 text-xl">Pagina</TextWithFont>

      <View className="flex-row items-center gap-3">
        <IconsWithTouchOpacity name="chevron-left" />
        <TextWithTouchOpactiy className="text-white text-xl">
          1
        </TextWithTouchOpactiy>
        <TextWithTouchOpactiy className="text-white text-xl">
          2
        </TextWithTouchOpactiy>
        <TextWithTouchOpactiy className="text-white text-xl">
          3
        </TextWithTouchOpactiy>
        <IconsWithTouchOpacity name="chevron-right" />
      </View>
    </View>
  )
}
