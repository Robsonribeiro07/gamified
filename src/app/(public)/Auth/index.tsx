import React from 'react'
import {
  Container,
  Header,
  TextDescription,
} from '@/components/screens/auth/components'
import { FormAuth } from '@/components/screens/auth/Form'
import { TextWithFont } from '@/components/default-components/Text-with-font'

export default function AuthPage() {
  return (
    <Container>
      <Header>
        <TextWithFont className="text-white text-5xl">GAMIFIED</TextWithFont>

        <TextDescription>
          Sua plataforma de {'\n'} estímulo ao aprendizado
        </TextDescription>
      </Header>

      <FormAuth />
    </Container>
  )
}
