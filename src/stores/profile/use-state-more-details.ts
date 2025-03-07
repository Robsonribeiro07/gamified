import { create } from 'zustand'

interface MoredetailsModal {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
  toggle: () => void
}

export const useStateModalDetails = create<MoredetailsModal>((set, get) => ({
  open: false,
  handleClose: () => set({ open: false }),
  handleOpen: () => set({ open: true }),
  toggle: () => set({ open: !get().open }), // Use get() to access current state
}))
