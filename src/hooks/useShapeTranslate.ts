import type { PointerEvent } from 'react';
import { useShapes } from '../store/shapes';
import type { s } from '../types';

export function useShapeTranslate(shape: s.Shapes) {
  const updateShape = useShapes((state) => state.updateShape);

  const handlePointerDown = (e: PointerEvent<SVGGElement>) => {
    const startX = e.clientX;
    const startY = e.clientY;

    const element = e.currentTarget;
    element.setPointerCapture(e.pointerId);

    const controller = new AbortController();

    const handleMove = (e: PointerEvent) => {
      const leftShift = e.clientX - startX;
      const topShift = e.clientY - startY;

      switch (shape.type) {
        case 'rectangle': {
          const updatedRectX = shape.x + leftShift;
          const updatedRectY = shape.y + topShift;

          updateShape({
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

  return { handlePointerDown };
}
