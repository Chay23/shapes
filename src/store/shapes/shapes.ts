import { create } from 'zustand';
import type { ShapesStore } from '../../types/store/shapes';
import { SHAPE_CONSTRUCTORS } from '@/lib/constants/shape-factory';
import { sharedShapesMap } from './sharedState';

export const useShapes = create<ShapesStore>(set => ({
  shapes: new Map(),
  selectedShapeIds: new Set(),
  addShape: (type, id, x, y) => {
    const constuctor = SHAPE_CONSTRUCTORS[type];
    // if (!constuctor) return state;

    const newShape = constuctor(id, x, y);
    // const updatedShapes = new Map(state.shapes).set(id, newShape);

    // 1. Instantly write to Yjs.
    // This automatically broadcasts the new shape over your Node server!
    sharedShapesMap.set(id, newShape);

    // 2. Keep selection local to this specific browser tab
    set({ selectedShapeIds: new Set([id]) });

    // return {
    // shapes: updatedShapes,
    // selectedShapeIds: new Set([id]),
    // };
  },
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

sharedShapesMap.observe(() => {
  const rawJson = sharedShapesMap.toJSON();

  // 2. Convert it back to a standard JavaScript Map to match your existing state structure
  const updatedMap = new Map(Object.entries(rawJson));

  // 3. Force-inject it directly into Zustand, triggering a clean React SVG re-render
  useShapes.setState({ shapes: updatedMap });
});
