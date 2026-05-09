import { useShapeTranslate } from '@/hooks/useShapeTranslate';
import type { s } from '@/types';

type Props = {
  line: s.Line;
};

export default function Line({ line }: Props) {
  const { handleShapeTranslate } = useShapeTranslate(line);

  const {
    points: [point1, point2],
  } = line;
  return (
    <g onPointerDown={handleShapeTranslate}>
      <line
        x1={point1.x}
        y1={point1.y}
        x2={point2.x}
        y2={point2.y}
        data-keep-selection={true}
        className='cursor-pointer'
        stroke={line.stroke}
        strokeWidth={line.strokeWidth}
      />
    </g>
  );
}
