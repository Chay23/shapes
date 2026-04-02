import type { s } from '..';

export type ShapesStore = {
  shapes: Map<string, s.Shapes>;
  selectedShapeIds: Set<string>;
  addShape: (type: s.ShapeType, id: string, x: number, y: number) => void;
  updateShape: (shape: s.Shapes) => void;
  selectShape: (shape: s.Shapes) => void;
  deselectShapes: () => void;
};
