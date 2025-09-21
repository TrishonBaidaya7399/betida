import { create } from "zustand";

interface LayoutState {
  mobileOpen: boolean;
  collapsed: boolean;
  toggleMobileOpen: () => void;
  toggleCollapsed: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  mobileOpen: false,
  collapsed: false,
  toggleMobileOpen: () => set((state) => ({ mobileOpen: !state.mobileOpen })),
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));
