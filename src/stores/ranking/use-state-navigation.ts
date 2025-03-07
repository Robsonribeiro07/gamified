import { create } from 'zustand'

interface StateNavigationRanking {
  page: number
  totalPage: number
  limit: number
  isStartPage: boolean
  isEndPage: boolean
  handleChangePage: (page: number) => void
  setTotalPage: (total: number) => void
  nextPage: () => void
  prevPage: () => void
  goStartPage: () => void
  goEndPage: () => void
}

export const useStateNavigationRanking = create<StateNavigationRanking>(
  (set, get) => ({
    page: 1,
    totalPage: 10,
    limit: 8,
    isStartPage: true,
    isEndPage: false,

    handleChangePage: (page) => {
      const { totalPage } = get()

      if (page >= 1 && page <= totalPage) {
        set({
          page,
          isStartPage: page === 1,
          isEndPage: page === totalPage,
        })
      }
    },

    nextPage: () => {
      const { page, totalPage } = get()

      if (page < totalPage) {
        const newPage = page + 1
        set({
          page: newPage,
          isStartPage: newPage === 1,
          isEndPage: newPage === totalPage,
        })
      }
    },

    prevPage: () => {
      const { page } = get()

      if (page > 1) {
        const newPage = page - 1
        set({
          page: newPage,
          isStartPage: newPage === 1,
          isEndPage: false,
        })
      }
    },
    setTotalPage: (total) => {
      set({ totalPage: total })
    },
    goEndPage: () => {
      const { totalPage } = get()
      set({ page: totalPage, isEndPage: true, isStartPage: false })
    },
    goStartPage: () => {
      set({ page: 1, isStartPage: true, isEndPage: false })
    },
  }),
)
