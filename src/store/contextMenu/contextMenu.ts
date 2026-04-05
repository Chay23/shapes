import type { ContextMenuStore } from '@/types/store/contextMenu';
import { create } from 'zustand';

export const useContextMenuStore = create<ContextMenuStore>((set) => ({
  menu: null,
  openContextMenu: (x: number, y: number) =>
    set({ menu: { open: true, x, y } }),
  closeContextMenu: () => set({ menu: null }),
}));
