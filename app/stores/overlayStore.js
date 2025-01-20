import { create } from "zustand";

export const overlayStore = create((set) => ({
    isOpen: false,
    overlayContent: '',
    setIsOpen: (h) => set(() => ({ isOpen: h })),
    setOverlayContent: (newContent) => set(() => ({ overlayContent: newContent }))
}))