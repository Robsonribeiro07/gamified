import { getUserData } from '@/api/user/get-data'
import { useQuery } from '@tanstack/react-query'

export function useGetData() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserData({ userId: 1 }),
  })

  return {
    data,
    isError,
    isFetching,
  }
}
