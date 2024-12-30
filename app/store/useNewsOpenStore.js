import { create } from "zustand";

export const useNewsOpenStore = create((set) => ({
    newsOpen: true,
    showHide: () => set((state) => ({ newsOpen: !(state.newsOpen) })),
}))