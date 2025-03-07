import { Image, View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'
import { ContentDetails } from './content-details'

export const typeCardItems = {
  Received: {
    title: 'Você recebeu:',
    description: 'Recebido de:',
    reason: 'Motivo:',
    image: require('@/assets/icons/historico/bonus.png'),
  },
  Rescued: {
    title: 'Voce resgatou:',
    description: 'Valor gasto:',
    reason: 'Retirado',
    image: require('@/assets/icons/historico/buy.png'),
  },
  Fined: {
    title: 'Voce foi multado em:',
    description: 'Multado por:',
    reason: 'Motivo',
    image: require('@/assets/icons/historico/fined.png'),
  },
} as const

type CardType = keyof typeof typeCardItems
interface CardItemsProps {
  type: CardType
  titleLabel: string
  descriptionLabel: string
  reasonLabel: string
  data: number
}
export function CardItems({
  type,
  titleLabel,
  descriptionLabel,
  reasonLabel,
  data,
}: CardItemsProps) {
  const { title, description, reason, image } = typeCardItems[type]

  const convertdate = (data: number) => {
    const timestamp = data * 1000
    return new Date(timestamp).toLocaleDateString('pt-BR')
  }

  return (
    <View className="w-full h-[120] rounded-xl py-10 items-center flex-row justify-between px-3 border-b border-white/50">
      <Image source={image} className="w-24 h-24" />
      <View className="flex-col items-center px-3 min-h-fit ">
        <ContentDetails title={title} label={`${titleLabel} coins`} isCoins />
        <ContentDetails title={description} label={descriptionLabel} />
        <ContentDetails title={reason} label={reasonLabel} />

        <TextWithFont className="text-white/70 my-3">
          {convertdate(data)} - 09:53
        </TextWithFont>
      </View>
    </View>
  )
}
