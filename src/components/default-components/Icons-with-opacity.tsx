import { TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import { IconProps } from 'react-native-vector-icons/Icon'

export function IconsWithTouchOpacity({
  name,
  disabled = false,
  ...rest
}: IconProps & {
  disabled?: boolean
}) {
  const isDisabled = disabled ? '#D3D3D3' : '#EEEEEE'
  return (
    <TouchableOpacity disabled={disabled}>
      <Icons name={name} {...rest} color={isDisabled} />
    </TouchableOpacity>
  )
}
