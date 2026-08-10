import { create } from "zustand";
import type { FlavorId } from "@/lib/flavors";

type FlavorState = {
  activeId: FlavorId;
  quantity: number;
  setActiveId: (id: FlavorId) => void;
  increment: () => void;
  decrement: () => void;
};

export const useFlavorStore = create<FlavorState>((set) => ({
  activeId: "bomba-intake",
  quantity: 1,
  setActiveId: (id) => set({ activeId: id }),
  increment: () => set((state) => ({ quantity: Math.min(state.quantity + 1, 9) })),
  decrement: () => set((state) => ({ quantity: Math.max(state.quantity - 1, 1) })),
}));
