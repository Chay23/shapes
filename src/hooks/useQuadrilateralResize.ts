import { getUpdatedQuadrilateral } from '../lib/constants/quadrilaterals/common';
import { useShapes } from '../store/shapes';
import type { s } from '../types';

type Props = {
  quadrilateral: s.Quadrilateral;
};

export default function useQuadrilateralResize({ quadrilateral }: Props) {
  const updateShape = useShapes((state) => state.updateShape);

  const handleQuadrilateralResize = (
    pointerDownEvent: React.PointerEvent<SVGCircleElement>,
  ) => {
    const element = pointerDownEvent.currentTarget;
    const resizeSide = element.getAttribute('data-resize-side') || '';

    element.setPointerCapture(pointerDownEvent.pointerId);

    const pressStartX = pointerDownEvent.clientX;
    const pressStartY = pointerDownEvent.clientY;

    const controller = new AbortController();

    element.addEventListener(
      'pointermove',
      (pointerMoveEvent: PointerEvent) => {
        const shiftX = pointerMoveEvent.clientX - pressStartX;
        const shiftY = pointerMoveEvent.clientY - pressStartY;

        const updatedQuadrilateral = getUpdatedQuadrilateral(
          quadrilateral,
          resizeSide,
          shiftX,
          shiftY,
        );

        updateShape(updatedQuadrilateral);
      },
      { signal: controller.signal },
    );

    element.addEventListener('pointerup', () => controller.abort());
  };

  return { handleQuadrilateralResize };
}
