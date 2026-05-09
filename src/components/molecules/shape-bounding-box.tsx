import { getShapeBoundingBoxProps } from '@/lib/utils/common';
import type { s } from '@/types';

type Props = {
  shape: s.Shape;
};

export default function ShapeBoundingBox({ shape }: Props) {
  const boundingBox = getShapeBoundingBoxProps(shape);

  if (!boundingBox) {
    return null;
  }

  return (
    <rect
      x={boundingBox.minX}
      y={boundingBox.minY}
      width={boundingBox.width}
      height={boundingBox.height}
      fill='transparent'
      strokeDasharray='5'
      strokeWidth='0.5'
      pointerEvents='none'
      className='stroke-blue-600'
    />
  );
}
