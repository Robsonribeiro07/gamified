import { View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'

import Icons from 'react-native-vector-icons/FontAwesome'

export function StudentCard() {
  return (
    <View className="w-[130]  h-14 bg-backgroundColor rounded   items-center justify-between px-3 flex-row">
      <View>
        <TextWithFont className="text-white opacity-6 ">
          Luis Silva
        </TextWithFont>
        <View className="flex-row gap-3">
          <TextWithFont className="text-white/70 text-xs ">Aluno</TextWithFont>
          <TextWithFont className="text-white/70 text-xs ">
            #345782
          </TextWithFont>
        </View>
      </View>

      <View className="bg-yellowColor h-6 w-6 rounded items-center justify-center">
        <Icons name="star" size={15} color="black " />
      </View>
    </View>
  )
}
