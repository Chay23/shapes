export type ContextMenuStore = {
  menu: {
    open: boolean;
    x: number;
    y: number;
  } | null;
  openContextMenu: (x: number, y: number) => void;
  closeContextMenu: () => void;
};
