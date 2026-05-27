import { useShapeTranslate } from '@/hooks/useShapeTranslate';
import { formatDashedStroke } from '@/lib/utils/common';
import type { s } from '@/types';

type Props = {
  ellipse: s.Ellipse;
};

export default function Ellipse({ ellipse }: Props) {
  const { handleShapeTranslate } = useShapeTranslate(ellipse);

  const strokeDasharray = formatDashedStroke(ellipse.strokeDasharray);

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
        strokeDasharray={strokeDasharray}
      />
    </g>
  );
}
