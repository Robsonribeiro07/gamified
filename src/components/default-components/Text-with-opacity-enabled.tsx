import { TouchableOpacity } from 'react-native'
import { Text, TextProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

export function TextWithTouchOpactiy(props: TextProps) {
  return (
    <TouchableOpacity>
      <Text {...props} className={twMerge('font-Questrial', props.className)} />
    </TouchableOpacity>
  )
}
