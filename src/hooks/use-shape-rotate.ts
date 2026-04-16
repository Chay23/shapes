import { getRotationAngle } from '@/lib/utils/common';
import { useShapes } from '@/store/shapes/shapes';
import type { s } from '@/types';
import { useRef } from 'react';

type Props = {
  initialRectangle: s.Rectangle;
};

export default function useShapeRotate({ initialRectangle }: Props) {
  const startRotationRef = useRef(0);

  const cx = initialRectangle.x + initialRectangle.width / 2;
  const cy = initialRectangle.y + initialRectangle.height / 2;

  const updateShape = useShapes(state => state.updateShape);

  const handleShapeRotate = (event: React.PointerEvent<SVGElement>) => {
    const element = event.currentTarget;
    const startX = event.clientX;
    const startY = event.clientY;

    element.setPointerCapture(event.pointerId);
    const startAngle = getRotationAngle(cx, cy, startX, startY);
    startRotationRef.current = initialRectangle.rotation;

    const onPointerMove = (event: PointerEvent) => {
      const currentAngle = getRotationAngle(
        cx,
        cy,
        event.clientX,
        event.clientY,
      );
      const delta = currentAngle - startAngle;

      updateShape({
        ...initialRectangle,
        rotation: startRotationRef.current + delta,
      });
    };

    function onPointerUp(e: PointerEvent) {
      (e.target as Element).releasePointerCapture(e.pointerId);
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('pointerup', onPointerUp);
    }

    element.addEventListener('pointermove', onPointerMove);
    element.addEventListener('pointerup', onPointerUp);
  };

  const resetShapeRotation = () => {
    updateShape({
      ...initialRectangle,
      rotation: 0,
    });
  };

  return { handleShapeRotate, resetShapeRotation };
}
