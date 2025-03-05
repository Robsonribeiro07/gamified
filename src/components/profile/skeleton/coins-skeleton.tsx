import { View } from 'react-native'
import { Skeleton } from 'components/Skeleton'
import { TextWithFont } from '@/components/default-components/Text-with-font'

export function CoinsSkeleton() {
  return (
    <View className="flex-col mr-5">
      <TextWithFont className="text-xl text-white/70 ">Coins:</TextWithFont>
      <Skeleton className="text-xl bg-yellowColor w-15 h-5" />
    </View>
  )
}
