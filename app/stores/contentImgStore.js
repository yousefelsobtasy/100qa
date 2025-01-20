import { create } from "zustand";

export const contentImgStore = create((set) => ({
    contentImgType: "",
    setContentImgType: (type) => set(() => ({ contentImgType: type })),
}))