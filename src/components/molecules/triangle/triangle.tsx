import { useShapeTranslate } from '@/hooks/useShapeTranslate';
import { formatDashedStroke } from '@/lib/utils/common';
import type { s } from '@/types';

type Props = {
  triangle: s.Triangle;
};

export default function Triangle({ triangle }: Props) {
  const { handleShapeTranslate } = useShapeTranslate(triangle);

  const strokeDasharray = formatDashedStroke(triangle.strokeDasharray);

  const {
    points: [point1, point2, point3],
  } = triangle;
  return (
    <g onPointerDown={handleShapeTranslate}>
      <polygon
        points={`${point1.x},${point1.y} ${point2.x},${point2.y} ${point3.x},${point3.y}`}
        data-keep-selection={true}
        className='cursor-pointer'
        fill={triangle.fill}
        stroke={triangle.stroke}
        strokeWidth={triangle.strokeWidth}
        strokeDasharray={strokeDasharray}
      />
    </g>
  );
}
