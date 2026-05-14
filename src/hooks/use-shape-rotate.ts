import { DIGITS_AFTER_COMMA } from '@/lib/constants/common';
import {
  getBoundingBoxCenterXPoint,
  getBoundingBoxCenterYPoint,
  getRotationAngle,
} from '@/lib/utils/common';
import { useShapes } from '@/store/shapes/shapes';
import type { s } from '@/types';
import { useRef } from 'react';

type Props = {
  initialShape: s.Shape;
};

export default function useShapeRotate({ initialShape }: Props) {
  const startRotationRef = useRef(0);
  const updateShape = useShapes(state => state.updateShape);

  const boundingBoxCenterX = getBoundingBoxCenterXPoint(initialShape);
  const boundingBoxCenterY = getBoundingBoxCenterYPoint(initialShape);

  const handleShapeRotate = (event: React.PointerEvent<SVGElement>) => {
    const element = event.currentTarget;
    const startX = event.clientX;
    const startY = event.clientY;

    element.setPointerCapture(event.pointerId);
    const startAngle = getRotationAngle(
      boundingBoxCenterX,
      boundingBoxCenterY,
      startX,
      startY,
    );
    startRotationRef.current = initialShape.rotation;

    const onPointerMove = (event: PointerEvent) => {
      const currentAngle = getRotationAngle(
        boundingBoxCenterX,
        boundingBoxCenterY,
        event.clientX,
        event.clientY,
      );
      const delta = currentAngle - startAngle;

      updateShape({
        ...initialShape,
        rotation: +(startRotationRef.current + delta).toFixed(
          DIGITS_AFTER_COMMA,
        ),
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
