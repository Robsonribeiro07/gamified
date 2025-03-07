import { Skeleton } from '@/components/ui/Skeleton'
import { View } from 'react-native'

export function NavigationSkeleton() {
  return (
    <View className="bg-headerColor min-w-fit w-[85%]  h-12 rounded-md mx-auto  flex-row items-center justify-around">
      <Skeleton className="w-14 h-5 bg-white/70" />

      <View className="flex-row items-center gap-1">
        <Skeleton className="w-6 h-4 bg-white/70" />
        <View className="items-center gap-3 min-w-fit flex-row">
          {Array.from({ length: 3 }).map((_, i) => {
            return <Skeleton className="w-6 h-4 bg-white/70" key={i} />
          })}
        </View>
        <Skeleton className="w-6 h-4 bg-white/70" />
      </View>
    </View>
  )
}
