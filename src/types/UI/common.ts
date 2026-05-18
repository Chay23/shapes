import type { s } from '..';

export type EditorCellType =
  | 'numeric'
  | 'text'
  | 'slider'
  | 'color-picker'
  | 'custom';

export type StrokeType = 'solid' | 'dashed';

export type NumericEditInputArgs = {
  type: 'numeric';
  shapePropName: s.NumericShapeKeys;
  props: {
    inputId: string;
    label?: string;
    fieldClassName?: string;
    inputClassName?: string;
  };
};

export type ColorEditInputArgs = {
  type: 'color-picker';
  shapePropName: s.ColorShapeKeys;
  props: {
    inputId: string;
    label?: string;
    fieldClassName?: string;
    inputClassName?: string;
  };
};

export type CustomEditorArgs = {
  type: 'custom';
  component: (...args: never[]) => React.ReactElement;
};

export type SliderEditorArgs = {
  type: 'slider';
  shapePropName: s.NumericShapeKeys;
  props: {
    inputId: string;
    label?: string;
    min: number;
    max: number;
  };
};

export type TabEditorArgs = {
  [key: string]: EditorGrid;
};

export type EditorCell = (
  | NumericEditInputArgs
  | ColorEditInputArgs
  | CustomEditorArgs
  | SliderEditorArgs
  | TabEditorArgs
) & {
  separator?: boolean;
};

export type EditorGrid = {
  title?: string;
  cells: EditorCell[];
};

export type Editor = {
  title: React.ReactElement | string;
  grids: EditorGrid[];
};

export type ContextMenuItem = {
  key: string;
  title: string;
  separator?: boolean;
  shortcut?: string;
  events?: { [key: string]: (...args: never[]) => void };
  dataAttributes?: { [key: string]: string | number };
};
