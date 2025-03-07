import { getRanking, getRankingTotal } from '@/api/ranking/get-ranking'
import { useStateNavigationRanking } from '@/stores/ranking/use-state-navigation'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'

export function useGetRanking() {
  const { limit, page, setTotalPage } = useStateNavigationRanking()

  const { data, isFetching, isError } = useQuery({
    queryKey: ['Ranking', page, limit],
    queryFn: () => getRanking({ page, limit }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  })

  const { data: rankingTotal } = useQuery({
    queryKey: ['rankingTotal'],
    queryFn: getRankingTotal,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5,
  })

  const totalPages = useMemo(() => {
    return rankingTotal ? Math.ceil(rankingTotal.length / limit) : 0
  }, [rankingTotal, limit])

  const nextPages = useMemo(() => {
    if (!totalPages) return []
    return Array.from({ length: 3 }, (_, i) => page + i).filter(
      (p) => p <= totalPages,
    )
  }, [page, totalPages])

  useEffect(() => {
    if (rankingTotal && rankingTotal.length > 0) {
      setTotalPage(Math.ceil(rankingTotal.length / limit))
    }
  }, [rankingTotal])

  return {
    data,
    isError,
    isFetching,
    nextPages,
  }
}
