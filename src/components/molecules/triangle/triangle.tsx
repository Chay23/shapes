import { useShapeTranslate } from '@/hooks/useShapeTranslate';
import type { s } from '@/types';

type Props = {
  triangle: s.Triangle;
};

export default function Triangle({ triangle }: Props) {
  const { handleShapeTranslate } = useShapeTranslate(triangle);

  const { x1, y1, x2, y2, x3, y3 } = triangle;
  return (
    <g onPointerDown={handleShapeTranslate}>
      <polygon
        points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
        data-keep-selection={true}
        className='cursor-pointer'
        fill={triangle.fill}
        stroke={triangle.stroke}
        strokeWidth={triangle.strokeWidth}
      />
    </g>
  );
}
