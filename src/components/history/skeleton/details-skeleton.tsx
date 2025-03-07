import { Skeleton } from '@/components/ui/Skeleton'
import { View } from 'react-native'

export function ContentDetailsSkeleton() {
  return (
    <View className="flex-row justify-between w-[150] items-center  ">
      <Skeleton className="bg-white/70 w-20 h-5" />
      <Skeleton className="w-14 h-5 bg-white" />
    </View>
  )
}
