import React from 'react'
import {
  Container,
  TextDescription,
} from '@/components/screens/auth/components'
import { FormAuth } from '@/components/screens/auth/Form'
import { TextWithFont } from '@/components/default-components/Text-with-font'
import { View } from 'react-native'

export default function AuthPage() {
  return (
    <Container>
      <View className="flex-col w-full justify-center items-center">
        <TextWithFont className="text-white text-5xl">GAMIFIED</TextWithFont>

        <TextDescription>
          Sua plataforma de {'\n'} estímulo ao aprendizado
        </TextDescription>
      </View>

      <FormAuth />
    </Container>
  )
}
