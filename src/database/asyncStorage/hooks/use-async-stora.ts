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

  async function changerName(name: string) {
    try {
      const result = await handleGetUserDataBase()

      const updateData = { ...result, name }

      if (result && result.name !== name) {
        await AsyncStorage.setItem(
          '@user_data',
          JSON.stringify({
            updateData,
          }),
        )
      } else {
        return {
          message: 'Usuario ja esta usando este nome',
        }
      }

      return updateData
    } catch {
      return null
    }
  }

  async function changerCoins(coins: number) {
    try {
      const result = await handleGetUserDataBase()

      const updateData = { ...result, coins }

      if (result && result.coins !== coins) {
        await AsyncStorage.setItem(
          '@user_data',
          JSON.stringify({
            updateData,
          }),
        )
      } else {
        return {
          message: 'Saldo igual ao anterior',
        }
      }

      return updateData
    } catch {
      return null
    }
  }
  async function changerCargo(cargo: string) {
    try {
      const result = await handleGetUserDataBase()

      const updateData = { ...result, cargo }

      if (result && result.cargo !== cargo) {
        await AsyncStorage.setItem(
          '@user_data',
          JSON.stringify({
            updateData,
          }),
        )
      } else {
        return {
          message: 'Cargo igual ao anterior',
        }
      }

      return updateData
    } catch {
      return null
    }
  }
  async function changer_id(_id: string) {
    try {
      const result = await handleGetUserDataBase()

      const updateData = { ...result, _id }

      if (result && result._id !== _id) {
        await AsyncStorage.setItem(
          '@user_data',
          JSON.stringify({
            updateData,
          }),
        )
      } else {
        return {
          message: '_id igual ao anterior',
        }
      }

      return updateData
    } catch {
      return null
    }
  }
  return {
    handleSaveUserDatabase,
    handleGetUserDataBase,
    removeItemFromAsyncStorage,
    changerCargo,
    changerName,
    changerCoins,
    changer_id,
  }
}
