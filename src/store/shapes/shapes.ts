import { create } from 'zustand';
import type { ShapesStore } from '../../types/store/shapes';
import { TYPE_ELLIPSE, TYPE_RECTANGLE } from '../../lib/constants/common';
import { constructRectangle } from '../../lib/utils/rectangle';
import { constructEllipse } from '@/lib/utils/ellipse';

export const useShapes = create<ShapesStore>(set => ({
  shapes: new Map(),
  selectedShapeIds: new Set(),
  addShape: (type, id, x, y) =>
    set(state => {
      const updatedShapes = new Map(state.shapes);
      switch (type) {
        case TYPE_RECTANGLE:
          return {
            shapes: updatedShapes.set(id, constructRectangle(id, x, y)),
          };
        case TYPE_ELLIPSE:
          return {
            shapes: updatedShapes.set(id, constructEllipse(id, x, y)),
          };
        default:
          return { shapes: state.shapes };
      }
    }),
  updateShape: shape =>
    set(state => {
      if (state.shapes.has(shape.id)) {
        const updatedShapes = new Map(state.shapes);
        updatedShapes.set(shape.id, shape);
        return { shapes: updatedShapes };
      }
      return { shapes: state.shapes };
    }),
  deleteShape: (id: string) => {
    set(state => {
      if (state.shapes.has(id)) {
        const updatedShapes = new Map(state.shapes);
        updatedShapes.delete(id);
        const updatedSelectedShapeIds = new Set(state.selectedShapeIds);
        updatedSelectedShapeIds.delete(id);
        return {
          shapes: updatedShapes,
          selectedShapeIds: updatedSelectedShapeIds,
        };
      }
      return { shapes: state.shapes, selectedShapeIds: state.selectedShapeIds };
    });
  },
  selectShape: shape =>
    set(state => {
      if (state.shapes.has(shape.id)) {
        const updatedSelectedShapeIds = new Set(state.selectedShapeIds);
        updatedSelectedShapeIds.add(shape.id);
        return { selectedShapeIds: updatedSelectedShapeIds };
      }
      return { selectedShapeIds: state.selectedShapeIds };
    }),

  deselectShapes: () =>
    set(() => {
      return { selectedShapeIds: new Set() };
    }),
}));
