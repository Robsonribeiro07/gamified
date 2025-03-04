import { Text, TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

export function TextWithFont(props: TextProps) {
  return (
    <Text {...props} className={twMerge('font-Questrial', props.className)} />
  )
}
