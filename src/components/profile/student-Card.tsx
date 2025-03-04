import { View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'

import Icons from 'react-native-vector-icons/FontAwesome'

interface StudentCardProps {
  Name: string
  Cargo: string
  _id: string
}
export function StudentCard({ Name, Cargo, _id }: StudentCardProps) {
  return (
    <View className="w-[130]  h-14 bg-backgroundColor rounded   items-center justify-between px-3 flex-row">
      <View>
        <TextWithFont className="text-white opacity-6 ">{Name}</TextWithFont>
        <View className="flex-row gap-3">
          <TextWithFont className="text-white/70 text-xs ">
            {Cargo}
          </TextWithFont>
          <TextWithFont className="text-white/70 text-xs ">{_id}</TextWithFont>
        </View>
      </View>

      <View className="bg-yellowColor h-6 w-6 rounded items-center justify-center">
        <Icons name="star" size={15} color="black " />
      </View>
    </View>
  )
}
