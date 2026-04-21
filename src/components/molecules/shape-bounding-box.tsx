import {
  getBoundingBoxXPoint,
  getBoundingBoxWidth,
  getBoundingBoxHeight,
  getBoundingBoxYPoint,
} from '@/lib/utils/common';
import type { s } from '@/types';

type Props = {
  shape: s.Shapes;
};

export default function ShapeBoundingBox({ shape }: Props) {
  const x = getBoundingBoxXPoint(shape);
  const y = getBoundingBoxYPoint(shape);

  const width = getBoundingBoxWidth(shape);
  const height = getBoundingBoxHeight(shape);

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill='transparent'
      strokeDasharray='5'
      strokeWidth='0.5'
      pointerEvents='none'
      className='stroke-blue-600'
    />
  );
}
