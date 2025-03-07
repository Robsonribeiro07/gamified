import { getHistorico, getHistoricoTotal } from '@/api/historico/get-historico'
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
    queryKey: ['historicoTotal'],
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

  useEffect(() => {
    if (historicoTotal && historicoTotal.length > 0) {
      setTotalPage(Math.ceil(historicoTotal.length / limit))
    }
  }, [historicoTotal])

  return {
    data,
    isError,
    isFetching,
    nextPages,
  }
}
