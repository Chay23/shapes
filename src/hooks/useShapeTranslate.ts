import { TYPE_RECTANGLE } from '@/lib/constants/common';
import { useShapes } from '../store/shapes/shapes';
import type { s } from '../types';

export function useShapeTranslate(shape: s.Shapes) {
  const updateShape = useShapes(state => state.updateShape);
  const selectShape = useShapes(state => state.selectShape);
  const deselectShapes = useShapes(state => state.deselectShapes);

  const handleShapeTranslate = (e: React.PointerEvent<SVGGElement>) => {
    deselectShapes();
    selectShape(shape);
    const startX = e.clientX;
    const startY = e.clientY;

    const element = e.currentTarget;
    element.setPointerCapture(e.pointerId);

    const controller = new AbortController();

    const handleMove = (e: PointerEvent) => {
      const leftShift = e.clientX - startX;
      const topShift = e.clientY - startY;

      switch (shape.type) {
        case TYPE_RECTANGLE: {
          const updatedRectX = shape.x + leftShift;
          const updatedRectY = shape.y + topShift;

          return updateShape({
            ...shape,
            x: updatedRectX,
            y: updatedRectY,
          });
        }
      }
    };

    element.addEventListener('pointermove', handleMove, {
      signal: controller.signal,
    });

    element.addEventListener('pointerup', () => {
      controller.abort();
    });
  };

  return { handleShapeTranslate };
}
