import styled from 'styled-components/native'

import { fontSize, colors } from '@/styles/themes/index'
import { Dimensions } from 'react-native'
import { Text } from '@/components/default-components/Text'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
  align-items: center;
  justify-content: space-around;
`

export const Header = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextName = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.xl};
  font-family: 'Questrial_400Regular';
`

export const TextDescription = styled.Text`
  color: ${colors.white};
  font-size: ${fontSize.base};
  font-family: 'Questrial_400Regular';
  text-align: center;
`

export const FormContainer = styled.View`
  height: 370;
  background-color: ${colors.headerColor};
  width: ${width * 0.8};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
`

export const TitleForm = styled(Text)`
  font-size: 28;
  opacity: 0.9;
  color: ${colors.white};
`
export const ContentInput = styled.View`
  flex-direction: column;
  align-items: start;
`
export const InputText = styled.View`
  background-color: ${colors.white};
  border-radius: 15px;
  height: 40;
  width: ${width * 0.6};
  flex-direction: row;
  align-items: center;
  padding-left: 5;
`

export const Iforgotmypassword = styled.View`
  align-self: flex-end;
  padding-right: 40;
  margin-top: 10;
  font-size: ${fontSize.base};
`

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${colors.backgroundColor};
  width: 200;
  justify-content: center;
  margin-top: 20;
  align-items: center;
  border-radius: 10px;
  height: 40;

  &:disabled {
    opacity: 0.2;
  }
`
