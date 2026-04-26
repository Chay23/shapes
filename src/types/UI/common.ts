export type EditorCell = {
  separator?: boolean;
  render: () => React.ReactElement;
};

export type EditorGrid = {
  title: string;
  components: EditorCell[];
};
