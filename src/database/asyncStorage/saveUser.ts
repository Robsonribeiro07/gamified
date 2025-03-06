import AsyncStorage from '@react-native-async-storage/async-storage'

export interface saveUserDatabaseProps {
  id?: number
  name?: string
  coins?: number
  cargo?: string
  _id?: string
}

export async function saveUserDatabase({
  _id,
  cargo,
  name,
  coins,
  id,
}: saveUserDatabaseProps) {
  try {
    const existingData = await AsyncStorage.getItem('@user_data')

    let updatedData = existingData ? JSON.parse(existingData) : {}

    updatedData = {
      _id: _id ?? updatedData._id,
      cargo: cargo ?? updatedData.cargo,
      name: name ?? updatedData.name,
      coins: coins ?? updatedData.coins,
      id: id ?? updatedData.id,
    }

    await AsyncStorage.setItem('@user_data', JSON.stringify(updatedData))

    console.log('Dados salvos ou atualizados com sucesso!')
  } catch (error) {
    console.log('Erro ao salvar dados no AsyncStorage:', error)
  }
}
