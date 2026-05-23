import { useShapes } from './shapes';

export const useSelectedShape = () =>
  useShapes(state => {
    const firstId = state.selectedShapeIds.values().next().value;
    return firstId ? state.shapes.get(firstId) : null;
  });

export const useIsShapeSelected = (id: string) =>
  useShapes(state => state.selectedShapeIds.has(id));

export const useUpdateShape = () => useShapes(state => state.updateShape);
