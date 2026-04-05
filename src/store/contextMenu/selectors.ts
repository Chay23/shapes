import { useContextMenuStore } from './contextMenu';

export const useContextMenu = () => useContextMenuStore((state) => state.menu);
export const useOpenContextMenu = () =>
  useContextMenuStore((state) => state.openContextMenu);
export const useCloseContextMenu = () =>
  useContextMenuStore((state) => state.closeContextMenu);
