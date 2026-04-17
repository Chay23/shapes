import {
  getOutlineXPoint,
  getOutlineYPoint,
  getShapeHeight,
  getShapeWidth,
} from '@/lib/utils/common';
import type { s } from '@/types';

type Props = {
  shape: s.Shapes;
};

export default function ShapeOutline({ shape }: Props) {
  const x = getOutlineXPoint(shape);
  const y = getOutlineYPoint(shape);

  const width = getShapeWidth(shape);
  const height = getShapeHeight(shape);

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
