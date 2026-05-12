import { useShapes } from '@/store/shapes/shapes';
import type { s } from '@/types';

export default function useShapeRotateInstant(initialShape: s.Shape) {
  const updateShape = useShapes(state => state.updateShape);

  const handleShapeRotate = (angle: number) => {
    return updateShape({
      ...initialShape,
      rotation: angle,
    });
  };

  return { handleShapeRotate };
}
