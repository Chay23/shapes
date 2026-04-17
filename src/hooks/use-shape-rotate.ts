import {
  getRotationAngle,
  getShapeCenterXPoint,
  getShapeCenterYPoint,
} from '@/lib/utils/common';
import { useShapes } from '@/store/shapes/shapes';
import type { s } from '@/types';
import { useRef } from 'react';

type Props = {
  initialShape: s.Shapes;
};

export default function useShapeRotate({ initialShape }: Props) {
  const startRotationRef = useRef(0);

  const cx = getShapeCenterXPoint(initialShape);
  const cy = getShapeCenterYPoint(initialShape);

  const updateShape = useShapes(state => state.updateShape);

  const handleShapeRotate = (event: React.PointerEvent<SVGElement>) => {
    const element = event.currentTarget;
    const startX = event.clientX;
    const startY = event.clientY;

    element.setPointerCapture(event.pointerId);
    const startAngle = getRotationAngle(cx, cy, startX, startY);
    startRotationRef.current = initialShape.rotation;

    const onPointerMove = (event: PointerEvent) => {
      const currentAngle = getRotationAngle(
        cx,
        cy,
        event.clientX,
        event.clientY,
      );
      const delta = currentAngle - startAngle;

      updateShape({
        ...initialShape,
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
      ...initialShape,
      rotation: 0,
    });
  };

  return { handleShapeRotate, resetShapeRotation };
}
