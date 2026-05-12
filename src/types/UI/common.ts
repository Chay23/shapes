export type EditorCell = {
  separator?: boolean;
  render: () => React.ReactElement;
};

export type EditorGrid = {
  title: string;
  components: EditorCell[];
};

export type ContextMenuItem = {
  key: string;
  title: string;
  separator?: boolean;
  shortcut?: string;
  events?: { [key: string]: (...args: never[]) => void };
  dataAttributes?: { [key: string]: string | number };
};
