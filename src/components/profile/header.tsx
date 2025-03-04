import { Text, View } from 'react-native'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'
import { StudentCard } from './student-Card'
import { Coins } from './coins'
import { useGetData } from '@/hooks/user/use-get-data'

export function Header() {
  const { data } = useGetData()

  return (
    <View className="w-full h-[80] rounded bg-headerColor p-1 flex-row items-center  px-2 rounded-bl-xl rounded-br-xl justify-between">
      <View className="flex-row gap-3 items-center">
        <Avatar
          alt="avatar profile"
          className="rounded bg-backgroundColor  h-16 w-16"
        >
          <AvatarImage
            source={require('@/assets/icons/image.png')}
            className="rounded"
          />
          <AvatarFallback>
            <Text>RB</Text>
          </AvatarFallback>
        </Avatar>

        <StudentCard Name={data?.name!} Cargo={data?.cargo!} _id={data?._id!} />
      </View>

      <Coins />
    </View>
  )
}
