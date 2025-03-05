import { View } from 'react-native'
import { CardItemsSkeleton } from './card-items-skeleton'

export function ContentSkeletonShop() {
  return (
    <View className="bg-headerColor   rounded-xl flex-1 pb-10 gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <CardItemsSkeleton key={i} />
      ))}
    </View>
  )
}
