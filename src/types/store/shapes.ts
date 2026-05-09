import type { s } from '..';

export type ShapesStore = {
  shapes: Map<string, s.Shape>;
  selectedShapeIds: Set<string>;
  addShape: (type: s.ShapeType, id: string, x: number, y: number) => void;
  updateShape: (shape: s.Shape) => void;
  deleteShape: (id: string) => void;
  selectShape: (shape: s.Shape) => void;
  deselectShapes: () => void;
};
