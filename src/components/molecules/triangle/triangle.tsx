import type { s } from '@/types';

type Props = {
  triangle: s.Triangle;
};

export default function Triangle({ triangle }: Props) {
  const { x1, y1, x2, y2, x3, y3 } = triangle;
  return (
    <g>
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
