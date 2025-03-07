import { Text, TouchableOpacity, View } from 'react-native'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'
import { StudentCard } from './student-Card'
import { Coins } from './coins'
import { useGetData } from '@/hooks/user/use-get-data'
import { SkeletonStudentCard } from './skeleton/student-Card-skeleton'
import { CoinsSkeleton } from './skeleton/coins-skeleton'
import { useStateModalDetails } from '@/stores/profile/use-state-more-details'
import { MoreDetails } from './more-details'
import { AvatarProfile } from './avatar'

export function Header() {
  const { data } = useGetData()

  const { open, handleOpen } = useStateModalDetails()

  return (
    <View className="w-full h-[80] rounded bg-headerColor p-1 flex-row items-center  px-2 rounded-bl-xl rounded-br-xl justify-between">
      <View className="flex-row gap-3 items-center">
        <TouchableOpacity onPress={handleOpen}>
          <AvatarProfile />
        </TouchableOpacity>

        <View className="relative">{open && <MoreDetails />}</View>

        {data ? (
          <StudentCard Name={data.name} Cargo={data.cargo} _id={data._id} />
        ) : (
          <SkeletonStudentCard />
        )}
      </View>

      {data ? <Coins /> : <CoinsSkeleton />}
    </View>
  )
}
