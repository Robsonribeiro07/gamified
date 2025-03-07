import { View } from 'react-native'
import { Skeleton } from '@/components/ui/Skeleton'
import { ContentDetailsSkeleton } from './details-skeleton'

export function CardItemsSkeleton() {
  return (
    <View className="w-full h-[120] rounded-xl py-10 items-center flex-row justify-between px-3 border-b border-white/50">
      <Skeleton className="w-24 h-28 bg-white/70" />
      <View className="flex-col items-center px-3 min-h-fit gap-3 ">
        {Array.from({ length: 3 }).map((_, i) => {
          return <ContentDetailsSkeleton key={i} />
        })}

        <Skeleton className="w-40 h-5 bg-white/70" />
      </View>
    </View>
  )
}
