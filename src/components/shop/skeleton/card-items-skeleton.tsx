import { TextWithFont } from '@/components/default-components/Text-with-font'
import { Skeleton } from 'components/Skeleton'
import { Image, View } from 'react-native'

export function CardItemsSkeleton() {
  return (
    <View className="w-full min-w-full bg-backgroundColor h-[100] rounded-xl py-10 items-center flex-row justify-between px-3">
      <Image
        source={require('@/assets/icons/exemaple.png')}
        className="w-24 h-24"
      />
      <View className="flex-col items-center ">
        <Skeleton className="text-2xl bg-white/70 w-36 h-5 " />

        <View className="flex-row w-full gap-10 mt-2 ">
          <TextWithFont className="text-white/70 text-xl">Valor:</TextWithFont>
          <Skeleton className="bg-yellowColor text-xl h-5 w-6" />
        </View>

        <View className="flex-row w-full gap-4">
          <TextWithFont className="text-white/70 text-xl ">
            Estoque:
          </TextWithFont>
          <Skeleton className="bg-yellowColor text-xl w-6 h-5" />
        </View>
      </View>
    </View>
  )
}
