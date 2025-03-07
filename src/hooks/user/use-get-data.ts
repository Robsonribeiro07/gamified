import { getUserData } from '@/api/user/get-data'
import { useAsyncStorage } from '@/database/asyncStorage/hooks/use-async-stora'
import { useDatabaseMMkV } from '@/database/MMKV/hooks/use-state-profile'
import { useQuery } from '@tanstack/react-query'

import { useEffect, useState } from 'react'

export function useGetData() {
  // const { handleSaveUserDatabase, handleGetUserDataBase } = useAsyncStorage()
  const { getUserDatabaseMMKV, saveUserDatabaseMMKV } = useDatabaseMMkV()
  const [isDataFetched, setIsDataFetched] = useState(false)

  const getDataWithDatabase = async () => {
    const result = getUserDatabaseMMKV()

    console.log('retornei dados local')
    if (result) return result

    const apiData = await getUserData({ userId: 3 })

    return apiData
  }

  const { data, isFetching, isError } = useQuery({
    queryKey: ['user'],
    queryFn: getDataWithDatabase,
    enabled: !isDataFetched,
  })

  useEffect(() => {
    if (data) {
      saveUserDatabaseMMKV({
        _id: data._id,
        cargo: data.cargo,
        name: data.name,
        id: data.id,
        coins: data.coins,
      })
      setIsDataFetched(true)
    }
  }, [data])
  return {
    data,
    isError,
    isFetching,
  }
}
