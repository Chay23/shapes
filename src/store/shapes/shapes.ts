import { create } from 'zustand';
import type { ShapesStore } from '../../types/store/shapes';
import { SHAPE_CONSTRUCTORS } from '@/lib/constants/shape-factory';

export const useShapes = create<ShapesStore>(set => ({
  shapes: new Map(),
  selectedShapeIds: new Set(),
  addShape: (type, id, x, y) =>
    set(state => {
      const constuctor = SHAPE_CONSTRUCTORS[type];
      if (!constuctor) return state;

      const newShape = constuctor(id, x, y);
      const updatedShapes = new Map(state.shapes).set(id, newShape);

      return {
        shapes: updatedShapes,
      };
    }),
  updateShape: shape =>
    set(state => {
      if (!state.shapes.has(shape.id)) return state;

      const updatedShapes = new Map(state.shapes).set(shape.id, shape);
      return { shapes: updatedShapes };
    }),
  deleteShape: (id: string) => {
    set(state => {
      if (!state.shapes.has(id)) return state;
      const updatedShapes = new Map(state.shapes);
      updatedShapes.delete(id);
      const updatedSelectedShapeIds = new Set(state.selectedShapeIds);
      updatedSelectedShapeIds.delete(id);
      return {
        shapes: updatedShapes,
        selectedShapeIds: updatedSelectedShapeIds,
      };
    });
  },
  selectShape: shape =>
    set(state => {
      if (!state.shapes.has(shape.id)) return state;
      const updatedSelectedShapeIds = new Set(state.selectedShapeIds).add(
        shape.id,
      );
      return { selectedShapeIds: updatedSelectedShapeIds };
    }),

  deselectShapes: () =>
    set(() => {
      return { selectedShapeIds: new Set() };
    }),
}));
