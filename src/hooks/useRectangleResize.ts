import { getUpdatedRectangle } from '@/lib/utils/rectangle';
import { useShapes } from '../store/shapes/shapes';
import type { s } from '../types';
import type { DirectionKey } from '@/types/shapes';

type Props = {
  rectangle: s.Rectangle;
};

export default function useRectangleResize({ rectangle }: Props) {
  const updateShape = useShapes(state => state.updateShape);

  const handleRectangleResize = (
    pointerDownEvent: React.PointerEvent<SVGCircleElement>,
  ) => {
    pointerDownEvent.stopPropagation();
    const element = pointerDownEvent.currentTarget;
    const resizeSide = element.getAttribute('data-resize-side') as DirectionKey;

    element.setPointerCapture(pointerDownEvent.pointerId);

    const pressStartX = pointerDownEvent.clientX;
    const pressStartY = pointerDownEvent.clientY;

    const controller = new AbortController();

    element.addEventListener(
      'pointermove',
      (pointerMoveEvent: PointerEvent) => {
        const shiftX = pointerMoveEvent.clientX - pressStartX;
        const shiftY = pointerMoveEvent.clientY - pressStartY;

        const updatedRectangle = getUpdatedRectangle(
          rectangle,
          resizeSide,
          shiftX,
          shiftY,
        );

        updateShape(updatedRectangle);
      },
      { signal: controller.signal },
    );

    element.addEventListener('pointerup', () => controller.abort());
  };

  return { handleRectangleResize };
}
