import { View } from 'react-native'
import { TextWithFont } from '../default-components/Text-with-font'
import { cn } from '@/lib/utils'

interface ContentDetailsProps {
  label: string
  title: string
  isCoins?: boolean
}
export function ContentDetails({ title, label, isCoins }: ContentDetailsProps) {
  const isCoinColor = isCoins ? 'text-yellowColor' : 'text-white/70'
  return (
    <View className="flex-row justify-between w-[150] items-center ">
      <TextWithFont className="text-white/70 text-xs">{title}</TextWithFont>
      <TextWithFont className={cn(`text-xs`, isCoinColor)}>
        {label}
      </TextWithFont>
    </View>
  )
}
