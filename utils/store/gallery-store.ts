import { create } from "zustand";

interface GalleryStore {
    currentPosition: number;
    setCurrentPosition: (position: number) => void;
    isPaused: boolean;
    setIsPaused: (isPaused: boolean) => void;
}

export const useGalleryStore = create<GalleryStore>((set) => ({
    currentPosition: 0,
    setCurrentPosition: (position) => set({ currentPosition: position }),
    isPaused: true,
    setIsPaused: (isPaused) => set({ isPaused: isPaused }),
}));