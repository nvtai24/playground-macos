import type { StateCreator } from "zustand";
import { enterFullScreen, exitFullScreen } from "~/utils";

export interface SystemSlice {
  dark: boolean;
  volume: number;
  brightness: number;
  wifi: boolean;
  bluetooth: boolean;
  airdrop: boolean;
  fullscreen: boolean;
  toggleDark: () => void;
  toggleWIFI: () => void;
  toggleBluetooth: () => void;
  toggleAirdrop: () => void;
  toggleFullScreen: (v: boolean) => void;
  setVolume: (v: number) => void;
  setBrightness: (v: number) => void;
}

const isDarkTime = () => {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6;
};

export const createSystemSlice: StateCreator<SystemSlice> = (set) => {
  const dark = isDarkTime();

  document.documentElement.classList.toggle("dark", dark);

  return {
    dark,
    volume: 100,
    brightness: 80,
    wifi: true,
    bluetooth: true,
    airdrop: true,
    fullscreen: false,

    toggleDark: () =>
      set((state) => {
        const nextDark = !state.dark;

        document.documentElement.classList.toggle("dark", nextDark);

        return { dark: nextDark };
      }),

    toggleWIFI: () => set((state) => ({ wifi: !state.wifi })),

    toggleBluetooth: () => set((state) => ({ bluetooth: !state.bluetooth })),

    toggleAirdrop: () => set((state) => ({ airdrop: !state.airdrop })),

    toggleFullScreen: (v) =>
      set(() => {
        const action = v ? enterFullScreen : exitFullScreen;
        action();

        return { fullscreen: v };
      }),

    setVolume: (v) => set(() => ({ volume: v })),

    setBrightness: (v) => set(() => ({ brightness: v }))
  };
};
