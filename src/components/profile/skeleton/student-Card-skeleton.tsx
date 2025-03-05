import { View } from 'react-native'
import { Skeleton } from 'components/Skeleton'
import Icons from 'react-native-vector-icons/FontAwesome'

export function SkeletonStudentCard() {
  return (
    <View className="w-[130]  h-14 bg-backgroundColor rounded   items-center justify-between px-3 flex-row">
      <View>
        <Skeleton className="bg-white/70 w-16 h-4" />
        <View className="flex-row gap-3 mt-1">
          <Skeleton className="bg-white/70 w-10 h-4" />
          <Skeleton className="bg-white/70 w-10 h-4  " />
        </View>
      </View>

      <View className="bg-yellowColor h-6 w-6 rounded items-center justify-center">
        <Icons name="star" />
      </View>
    </View>
  )
}
