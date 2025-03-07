import { TextWithFont } from '@/components/default-components/Text-with-font'
import { TouchableOpacity } from 'react-native'
import { Image, View } from 'react-native'
import { twMerge } from 'tailwind-merge'
import { RoouterTypes } from '@/Routes/Types'
import { usePathname, useRouter } from 'expo-router'

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
  route?: keyof RoouterTypes
}
export function NavItems({ Type, className, route }: NavItemsProps) {
  const option = ItensNav[Type]

  const { push } = useRouter()

  const pathname = usePathname()

  const handleNavigate = () => {
    if (!route || pathname.includes(route)) return
    push(route)
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
      <View
        className={twMerge(
          `min-w-fit w-full bg-headerColor h-[125] rounded-[20] items-center justify-around flex-row gap-3 px-2 `,
          className,
        )}
      >
        <Image source={option.image} className="object-contain  h-20 w-20 " />

        <TextWithFont className="text-5xl text-white/80 flex-1  flex-nowrap whitespace-nowrap text-nowrap">
          {option.text}
        </TextWithFont>
      </View>
    </TouchableOpacity>
  )
}
