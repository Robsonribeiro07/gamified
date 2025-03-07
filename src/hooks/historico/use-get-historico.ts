import { getHistorico, getHistoricoTotal } from '@/api/historico/get-historico'
import { getStore } from '@/api/store/get-store'
import { useStateNavigationHistorico } from '@/stores/historico/use-state-navigation-historico'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

export function useGetHistorico() {
  const { limit, page, setTotalPage } = useStateNavigationHistorico()

  const { data, isFetching, isError } = useQuery({
    queryKey: ['historico', page, limit],
    queryFn: () => getHistorico({ page, limit }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  })

  const { data: historicoTotal } = useQuery({
    queryKey: ['storeTotal'],
    queryFn: getHistoricoTotal,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5,
  })

  const totalPages = useMemo(() => {
    return historicoTotal ? Math.ceil(historicoTotal.length / limit) : 0
  }, [historicoTotal, limit])

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
    if (historicoTotal && historicoTotal.length > 0) {
      setTotalPage(Math.ceil(historicoTotal.length / limit))
    }
  }, [historicoTotal])

  return {
    data,
    nextPagesData: nextPagesData.data || [],
    isError,
    isFetching,
    nextPages,
  }
}
