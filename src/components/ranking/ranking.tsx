import { Image, View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'
import { AvatarProfile } from '../profile/avatar'

const rankingCardTypes = {
  1: {
    backgroundColor: 'bg-[#FFF706]',
    color: 'text-headerColor',
    image: require('@/assets/icons/ranking/ranking1.png'),
  },
  2: {
    backgroundColor: 'bg-[#D7D9D7]',
    color: 'text-headerColor',
    image: require('@/assets/icons/ranking/ranking2.png'),
  },
  3: {
    backgroundColor: 'bg-[#7C4D2A]',
    color: 'text-headerColor',
    image: require('@/assets/icons/ranking/ranking3.png'),
  },
} as const

type RankingTypes = keyof typeof rankingCardTypes

interface RankingCardProps {
  ranking: RankingTypes | number
  name: string
  matricula: number
  coins: number
}

export function RankingCard({
  ranking,
  name,
  matricula,
  coins,
}: RankingCardProps) {
  const data = rankingCardTypes[ranking as RankingTypes] || {
    backgroundColor: 'bg-headerColor',
    image: null,
    color: '#fff',
  }

  return (
    <View
      className={`w-full h-20 rounded-xl items-center flex-row px-3 justify-between ${data.backgroundColor}`}
    >
      <View className="gap-3 items-center flex-row">
        {data.image ? (
          <Image source={data.image} className="w-10 h-10" />
        ) : (
          <TextWithFont className="text-white/70 text-4xl">
            {`${ranking}#`}
          </TextWithFont>
        )}
        <AvatarProfile className="w-10 h-10 rounded-md" />
        <TextWithFont className={`${data.color} text-base`}>
          {name}
        </TextWithFont>
      </View>

      <View className="gap-3 items-center flex-row">
        <TextWithFont className={`${data.color} text-base`}>
          {matricula}#
        </TextWithFont>
        <TextWithFont className={`${data.color} text-base`}>
          {coins}
        </TextWithFont>
      </View>
    </View>
  )
}
