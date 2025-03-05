import { getUserData } from '@/api/user/get-data'
import { useAsyncStorage } from '@/database/asyncStorage/hooks/use-async-stora'
import { useQuery } from '@tanstack/react-query'

import { useEffect, useState } from 'react'

export function useGetData() {
  const { handleSaveUserDatabase, handleGetUserDataBase } = useAsyncStorage()
  const [isDataFetched, setIsDataFetched] = useState(false)

  const getDataWithDatabase = async () => {
    const result = await handleGetUserDataBase()

    if (result) return result

    const apiData = await getUserData({ userId: 5 })

    return apiData
  }

  const { data, isFetching, isError } = useQuery({
    queryKey: ['user'],
    queryFn: getDataWithDatabase,
    enabled: !isDataFetched,
  })

  useEffect(() => {
    if (data) {
      handleSaveUserDatabase({
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
