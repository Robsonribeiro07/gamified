import { RouterStacks } from '@/app/navigation/router-types'
import { TextWithFont } from '@/components/default-components/Text-with-font'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native'
import { Image, View } from 'react-native'
import { twMerge } from 'tailwind-merge'

type NavigationProps = NativeStackNavigationProp<RouterStacks>
const ItensNav = {
  Historico: {
    image: require('@/assets/icons/historico.png'),
    text: 'Historico',
  },
  Shop: {
    image: require('@/assets/icons/shop.png'),
    text: 'Loja',
  },
  Ranking: {
    image: require('@/assets/icons/ranking.png'),
    text: 'Ranking',
  },
} as const

interface NavItemsProps {
  Type: keyof typeof ItensNav
  className?: string
  route: keyof RouterStacks
}
export function NavItems({ Type, className, route }: NavItemsProps) {
  const option = ItensNav[Type]

  const navigation = useNavigation<NavigationProps>()

  const handleNavigate = () => {
    if (!route || !navigation) return
    navigation.navigate(route)
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
      <View
        className={twMerge(
          `min-w-[90%] bg-headerColor h-[120] rounded-[20] items-center justify-around flex-row gap-3 px-5`,
          className,
        )}
      >
        <Image source={option.image} className="object-contain  h-20 w-20 " />

        <TextWithFont className="text-5xl text-white/80">
          {option.text}
        </TextWithFont>
      </View>
    </TouchableOpacity>
  )
}
