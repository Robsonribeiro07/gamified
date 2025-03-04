import React from 'react'
import {
  Container,
  Header,
  TextDescription,
  TextName,
} from '@/components/screens/auth/components'
import { FormAuth } from '@/components/screens/auth/Form'

const AuthPage = () => {
  return (
    <Container>
      <Header>
        <TextName>GAMIFIED</TextName>

        <TextDescription>
          Sua plataforma de {'\n'} estímulo ao aprendizado
        </TextDescription>
      </Header>

      <FormAuth />
    </Container>
  )
}

export default AuthPage
