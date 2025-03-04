import { useFonts } from 'expo-font'
import { Questrial_400Regular } from '@expo-google-fonts/questrial'

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    Questrial_400Regular,
  })

  return fontsLoaded
}

export default useCustomFonts
