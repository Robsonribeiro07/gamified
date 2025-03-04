import { Image, View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'
import { useAsyncStorage } from '@/database/asyncStorage/hooks/use-async-stora'

interface CardItemsProps {
  itemName: string
  price: number
  estoque: number
}
export function CardItems({ estoque, price, itemName }: CardItemsProps) {
  const { removeItemFromAsyncStorage } = useAsyncStorage()
  return (
    <View className="w-full bg-backgroundColor h-[100] rounded-xl py-10 items-center flex-row justify-between px-3">
      <Image
        source={require('@/assets/icons/exemaple.png')}
        className="w-24 h-24"
      />
      <View className="flex-col items-center ">
        <TextWithFont className="text-2xl text-white/70">
          {itemName}
        </TextWithFont>

        <View className="flex-row w-full gap-10 ">
          <TextWithFont
            className="text-white/70 text-xl"
            onPress={removeItemFromAsyncStorage}
          >
            Valor:
          </TextWithFont>
          <TextWithFont className="text-yellowColor text-xl">
            {price}
          </TextWithFont>
        </View>

        <View className="flex-row w-full gap-4">
          <TextWithFont className="text-white/70 text-xl">
            Estoque:
          </TextWithFont>
          <TextWithFont className="text-yellowColor text-xl">
            {estoque}
          </TextWithFont>
        </View>
      </View>
    </View>
  )
}
