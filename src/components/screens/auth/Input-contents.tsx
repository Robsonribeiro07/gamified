import { Text } from '@/components/default-components/Text'
import { ContentInput, InputText } from './components'

import Icons from 'react-native-vector-icons/FontAwesome'

import { TextInput } from 'react-native'
import { TextWithFont } from '@/components/default-components/Text-with-font'

const icons = {
  lock: 'lock',
  user: 'user',
} as const
interface InputContentProps {
  Title: string
  icon: keyof typeof icons
  onChangeText: () => void
}

export function InputContents({
  Title,
  icon,
  onChangeText,
}: InputContentProps) {
  return (
    <ContentInput>
      <TextWithFont className="text-white/70 mb-2">{Title}</TextWithFont>
      <InputText>
        <Icons name={icons[icon]} size={30} />
        <TextInput style={{ flex: 1 }} onChangeText={onChangeText} />
      </InputText>
    </ContentInput>
  )
}
