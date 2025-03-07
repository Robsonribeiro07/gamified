import { View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'

export function Header() {
  return (
    <View className="flex-row items-center ">
      <TextWithFont className="text-xs w-12 text-center">Posição</TextWithFont>
      <TextWithFont className="text-xs flex-1 text-left ml-2">
        Aluno
      </TextWithFont>
      <TextWithFont className="text-xs w-20 text-center">
        Matrícula
      </TextWithFont>
      <TextWithFont className="text-xs w-16 text-center">Coins</TextWithFont>
    </View>
  )
}
