import { getStore, getStoreTotal } from '@/api/store/get-store'
import { useStateNavigationStore } from '@/stores/store/use-state-navigation'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

export function useGetStore() {
  const { limit, page, setTotalPage } = useStateNavigationStore()

  const { data, isFetching, isError } = useQuery({
    queryKey: ['store', page, limit],
    queryFn: () => getStore({ page, limit }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  })

  const { data: storeTotal } = useQuery({
    queryKey: ['storeTotal'],
    queryFn: getStoreTotal,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5,
  })

  const totalPages = useMemo(() => {
    return storeTotal ? Math.ceil(storeTotal.length / limit) : 9
  }, [storeTotal, limit])

  const nextPages = useMemo(() => {
    if (!totalPages) return []
    return Array.from({ length: 3 }, (_, i) => page + i).filter(
      (p) => p <= totalPages,
    )
  }, [page, totalPages])
  const nextPagesData = useQuery({
    queryKey: ['store', nextPages, limit],
    queryFn: async () => {
      const responses = await Promise.all(
        nextPages.map((p) => getStore({ page: p, limit })),
      )
      return responses.flat()
    },
    enabled: !!page,
  })

  useEffect(() => {
    if (storeTotal && storeTotal.length > 0) {
      setTotalPage(Math.ceil(storeTotal.length / limit))
    }
  }, [storeTotal])

  return {
    data,
    nextPagesData: nextPagesData.data || [],
    isError,
    isFetching,
    nextPages,
  }
}
