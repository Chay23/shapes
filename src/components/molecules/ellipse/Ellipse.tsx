import { useShapeTranslate } from '@/hooks/useShapeTranslate';
import type { s } from '@/types';

type Props = {
  ellipse: s.Ellipse;
};

export default function Ellipse({ ellipse }: Props) {
  const { handleShapeTranslate } = useShapeTranslate(ellipse);

  return (
    <g onPointerDown={handleShapeTranslate}>
      <ellipse
        data-keep-selection
        className='cursor-pointer'
        cx={ellipse.cx}
        cy={ellipse.cy}
        rx={ellipse.rx}
        ry={ellipse.ry}
        fill={ellipse.fill}
        stroke={ellipse.stroke}
        strokeWidth={ellipse.strokeWidth}
      />
    </g>
  );
}
