import * as LocalAuthentication from 'expo-local-authentication'
import { Alert, Linking, Vibration } from 'react-native'

export function useLocaleAuthentication() {
  const isErroledAsync = async () => {
    return await LocalAuthentication.isEnrolledAsync()
  }

  const flowAsyncAuthentication = async () => {
    const isLocaleAuthenticationSaved = await isErroledAsync()

    if (!isLocaleAuthenticationSaved) {
      Vibration.vibrate()

      Alert.alert('Erro', 'Por favor cadastre uma biometria', [
        { text: 'definir', onPress: () => Linking.openSettings() },
      ])
      return
    }

    const startAuthentication = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Por favor, faça autenticação',
      fallbackLabel: 'Tente novamente se a biometria falhar',
    })

    if (!startAuthentication.success) {
      Alert.alert(
        'Erro de autenticação',
        'Biometria incorreta. Tente novamente.',
      )
    } else {
      Alert.alert(
        'Autenticação bem-sucedida',
        'Você foi autenticado com sucesso!',
      )
    }
  }

  return {
    flowAsyncAuthentication,
  }
}
