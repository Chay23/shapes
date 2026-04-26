import { getShapeBoundingBox } from '@/lib/utils/common';
import type { s } from '@/types';

type Props = {
  shape: s.Shapes;
};

export default function ShapeBoundingBox({ shape }: Props) {
  const boundingBox = getShapeBoundingBox(shape);

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
