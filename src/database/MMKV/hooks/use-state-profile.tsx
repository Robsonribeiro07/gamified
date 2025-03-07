import { useMemo } from 'react'
import { MMKV } from 'react-native-mmkv'

export interface saveUserDatabaseProps {
  id?: number
  name?: string
  coins?: number
  cargo?: string
  _id?: string
}
const storage = new MMKV({ id: 'profile' })

export function useDatabaseMMkV() {
  return useMemo(() => {
    const saveUserDatabaseMMKV = ({
      id,
      name,
      coins,
      cargo,
      _id,
    }: saveUserDatabaseProps) => {
      storage.set(
        'user',
        JSON.stringify({
          _id,
          cargo,
          name,
          id,
          coins,
        }),
      )
    }

    const getUserDatabaseMMKV = (): saveUserDatabaseProps | null => {
      const user = storage.getString('user')

      return user ? JSON.parse(user) : null
    }
    return { saveUserDatabaseMMKV, getUserDatabaseMMKV }
  }, [])
}
