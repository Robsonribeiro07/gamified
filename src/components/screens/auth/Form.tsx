import { Text } from '@/components/default-components/Text'
import { ButtonLogin, FormContainer, Iforgotmypassword } from './components'
import { InputContents } from './Input-contents'
import { useFormAuth } from '@/hooks/auth/form'
import { Controller } from 'react-hook-form'
import { TextWithFont } from '@/components/default-components/Text-with-font'
import { navigate } from '@/app/navigation/navigation.ref'

export function FormAuth() {
  const { isSubmitting, inputs, handleSubmit, control } = useFormAuth()

  const handleSumitFn = async () => {
    navigate('App')
  }
  return (
    <FormContainer>
      <TextWithFont className="text-2xl text-white min-w-fit">
        Faça seu login
      </TextWithFont>

      {inputs.map((input) => (
        <Controller
          key={input.name}
          name={input.name}
          control={control}
          render={({ field }) => {
            return (
              <InputContents
                Title={input.title}
                icon={input.icon}
                onChangeText={field.onChange}
              />
            )
          }}
        />
      ))}

      <Iforgotmypassword>
        <Text>Esqueci minha senha</Text>
      </Iforgotmypassword>

      <ButtonLogin
        activeOpacity={0.7}
        onPress={handleSubmit(handleSumitFn)}
        disabled={isSubmitting}
      >
        <TextWithFont className="text-white/90">Login</TextWithFont>
      </ButtonLogin>
    </FormContainer>
  )
}
