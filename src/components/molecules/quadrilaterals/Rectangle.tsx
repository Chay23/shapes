import type { s } from '../../../types';

type Props = {
  rect: s.Rectangle;
};

export default function Rectangle({ rect }: Props) {
  return (
    <g>
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.width}
        height={rect.height}
        fill={rect.fill}
        stroke={rect.stroke}
      ></rect>
    </g>
  );
}
