import {
  saveUserDatabase,
  saveUserDatabaseProps,
} from '@/database/asyncStorage/saveUser'
import { getUserDataResponse } from '@/api/user/get-data'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function useAsyncStorage() {
  async function handleGetUserDataBase(): Promise<getUserDataResponse | null> {
    try {
      const userDatabase = await AsyncStorage.getItem('@user_data')

      if (userDatabase !== null) {
        return JSON.parse(userDatabase)
      }
      return null
    } catch {
      console.log('erro a recupera dados')
      return null
    }
  }

  const handleSaveUserDatabase = async ({
    coins,
    cargo,
    name,
    id,
    _id,
  }: saveUserDatabaseProps) => {
    const existingDatabase = await handleGetUserDataBase()

    if (!existingDatabase) {
      saveUserDatabase({
        cargo,
        coins,
        name,
        _id,
        id,
      })
      console.log('dados existente')
    } else {
      if (
        existingDatabase.name !== name ||
        existingDatabase._id !== _id ||
        existingDatabase.id !== id ||
        existingDatabase.coins !== coins ||
        existingDatabase.cargo !== cargo
      ) {
        await AsyncStorage.setItem(
          '@user_data',
          JSON.stringify({
            name,
            coins,
            cargo,
            id,
            _id,
          }),
        )
        console.log('dados novosr')
      }
    }
  }

  async function removeItemFromAsyncStorage() {
    try {
      await AsyncStorage.removeItem('@user_data')
      console.log('Item removido com sucesso!')
    } catch (error) {
      console.log('Erro ao remover item:', error)
    }
  }

  return {
    handleSaveUserDatabase,
    handleGetUserDataBase,
    removeItemFromAsyncStorage,
  }
}
