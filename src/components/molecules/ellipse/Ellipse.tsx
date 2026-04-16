import type { s } from '@/types';

type Props = {
  ellipse: s.Ellipse;
};

export default function Ellipse({ ellipse }: Props) {
  return (
    <g>
      <ellipse
        data-keep-selection
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
