import { create } from 'zustand'

interface StateNavigationStore {
  page: number
  totalPage: number
  limit: number
  isStartPage: boolean
  isEndPage: boolean
  handleChangePage: (page: number) => void
  setTotalPage: (total: number) => void
  nextPage: () => void
  prevPage: () => void
}

export const useStateNavigationStore = create<StateNavigationStore>(
  (set, get) => ({
    page: 1,
    totalPage: 10,
    limit: 4,
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
  }),
)
