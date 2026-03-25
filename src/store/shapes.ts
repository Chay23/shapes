import { create } from 'zustand';
import type { ShapesStore } from '../types/store/shapes';
import { TYPE_RECTANGLE } from '../lib/constants/common';
import { constructRectangle } from '../lib/utils/quadrilaterals/rectangle';

export const useShapes = create<ShapesStore>((set) => ({
  shapes: new Map(),
  addShape: (type, id, x, y) =>
    set((state) => {
      const updatedShapes = new Map(state.shapes);
      switch (type) {
        case TYPE_RECTANGLE:
          return {
            shapes: updatedShapes.set(id, constructRectangle(id, x, y)),
          };
        default:
          return { shapes: state.shapes };
      }
    }),
}));
