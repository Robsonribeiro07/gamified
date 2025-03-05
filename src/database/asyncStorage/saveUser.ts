import AsyncStorage from '@react-native-async-storage/async-storage'
export interface saveUserDatabaseProps {
  id: number
  name: string
  coins: number
  cargo: string
  _id: string
}
export async function saveUserDatabase({
  _id,
  cargo,
  name,
  coins,
  id,
}: saveUserDatabaseProps) {
  try {
    await AsyncStorage.setItem(
      '@user_data',
      JSON.stringify({
        _id,
        cargo,
        name,
        coins,
        id,
      }),
    )

    console.log('sucess')
  } catch (error) {
    console.log(error)
  }
}
